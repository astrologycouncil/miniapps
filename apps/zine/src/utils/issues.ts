import { getCollection } from "astro:content";

export async function getIssues(): Promise<string[]> {
  const pages = await getCollection("pages");
  const issues = [...new Set(pages.map((page: any) => page.id.split("/")[0]))];

  return issues
    .filter((issue: string) => {
      const parts = issue.split("-");

      if (parts.length < 4) return false;

      const [year, month, day] = parts;

      if (!/^\d{4}$/.test(year)) return false;

      if (!/^(0[1-9]|1[0-2])$/.test(month)) return false;

      if (!/^(0[1-9]|[12][0-9]|3[01])$/.test(day)) return false;

      return true;
    })
    .sort();
}

export function formatIssue(issue: string): string {
  const [, , , ...nameParts] = issue.split("-");
  return `${nameParts.join(" ")}`;
}
