import "server-only";
import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "bliss_admin_session";
const SESSION_DURATION = 60 * 60 * 24; // 24 hours

function getSecretKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET is missing or too short.");
  }

  return new TextEncoder().encode(secret);
}

export async function createAdminSession(email) {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(email)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(getSecretKey());

  return token;
}

export async function verifyAdminSession(token) {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],
    });

    if (payload.role !== "admin" || !payload.sub) {
      return null;
    }

    return { email: payload.sub };
  } catch {
    return null;
  }
}

export { COOKIE_NAME, SESSION_DURATION };
