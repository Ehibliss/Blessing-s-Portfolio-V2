"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminControls() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      if (!response.ok) {
        setError("Unable to sign out. Please try again.");
        return;
      }

      router.replace("/admin/login");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        style={{
          padding: "0.7rem 1.1rem",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          background: "var(--primary)",
          color: "#fff",
          cursor: loading ? "wait" : "pointer",
          font: "inherit",
        }}
      >
        {loading ? "Signing out..." : "Sign out"}
      </button>

      {error && (
        <p role="alert" style={{ color: "var(--secondary)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
