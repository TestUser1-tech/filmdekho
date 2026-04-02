import { createClient, type SanityClient } from "@sanity/client";

/** Sanity IDs are lowercase a–z, 0–9, dashes only — no spaces or uppercase. */
function normalizeProjectId(raw: string | undefined): string | null {
  if (!raw) return null;
  const id = raw
    .trim()
    .replace(/^["']|["']$/g, "")
    .toLowerCase();
  if (!/^[a-z0-9-]+$/.test(id)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is invalid. Use the ID from sanity.io/manage (e.g. abcd12ef), not the project name or URL.",
      );
    }
    return null;
  }
  return id;
}

const projectId = normalizeProjectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production").trim();

export function getSanityClient(): SanityClient | null {
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: true,
  });
}
