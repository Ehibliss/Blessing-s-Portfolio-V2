import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, verifyAdminSession } from "@/lib/auth";
import poolData from "@/lib/db";
import styles from "./dashboard.module.css";
import AdminControls from "@/components/admin/AdminControls";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const session = await verifyAdminSession(token);

  // Protect the dashboard from visitors who are not logged in.
  if (!session) {
    redirect("/admin/login");
  }

  let messages = [];
  let loadError = false;

  try {
    const result = await poolData.query(`
      SELECT id, name, email, subject, message, created_at
      FROM contact_messages
      ORDER BY created_at DESC
      LIMIT 100
    `);

    messages = result.rows.map((item) => ({
      ...item,
      id: String(item.id),
      created_at: item.created_at.toISOString(),
    }));
  } catch (error) {
    console.error("Unable to load admin messages:", error.message);
    loadError = true;
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          Blessing
        </a>

        <div className={styles.headerActions}>
          <span className={styles.account}>{session.email}</span>
          <AdminControls />
        </div>
      </header>

      <section className={styles.content}>
        <p className={styles.eyebrow}>ADMINISTRATION</p>
        <h1>Contact messages</h1>
        <p className={styles.description}>
          Manage messages sent through your portfolio.
        </p>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span>Total messages loaded</span>
            <strong>{messages.length}</strong>
          </div>
        </div>

        {loadError ? (
          <p className={styles.notice}>
            We couldn’t load your messages. Please try again later.
          </p>
        ) : messages.length === 0 ? (
          <div className={styles.empty}>
            <h2>No messages yet</h2>
            <p>New messages from your portfolio will appear here.</p>
          </div>
        ) : (
          <div className={styles.messageList}>
            {messages.map((item) => (
              <article className={styles.messageCard} key={item.id}>
                <div className={styles.messageHeader}>
                  <h2>{item.name}</h2>
                  <time dateTime={item.created_at}>
                    {new Date(item.created_at).toLocaleString("en-NG", {
                      dateStyle: "medium",
                      timeStyle: "short",
                      timeZone: "Africa/Lagos",
                    })}
                  </time>
                </div>

                <a className={styles.email} href={`mailto:${item.email}`}>
                  {item.email}
                </a>

                {item.subject && (
                  <h3 className={styles.subject}>{item.subject}</h3>
                )}

                <p className={styles.message}>{item.message}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
