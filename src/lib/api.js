// Base URL of the Express API. Set NEXT_PUBLIC_API_URL to the deployed
// server URL; falls back to the local server during development.
const rawBaseUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, "");

export function apiUrl(path) {
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
