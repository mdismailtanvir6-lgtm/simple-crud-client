// Base URL of the Express API.
// NEXT_PUBLIC_API_URL overrides this in every environment. On Vercel production
// we fall back to the deployed API so a missing (or localhost-only) env var
// doesn't break the live site. Local development uses localhost.
const DEPLOYED_API_URL = "https://simple-crud-server-beta-seven.vercel.app";
const LOCAL_API_URL = "http://localhost:5000";

const configuredBaseUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
const isProduction = process.env.NODE_ENV === "production";
const configuredIsLocalhost =
  /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i.test(configuredBaseUrl ?? "");

const rawBaseUrl =
  configuredBaseUrl && !(isProduction && configuredIsLocalhost)
    ? configuredBaseUrl
    : isProduction
      ? DEPLOYED_API_URL
      : LOCAL_API_URL;

export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, "");

export function apiUrl(path) {
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
