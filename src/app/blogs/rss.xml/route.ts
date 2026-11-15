import { posts, SITE } from "@/content/blog";

const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);

export const dynamic = "force-static";

/** The blog as an RSS feed, for readers and for search engines that like one. */
export function GET() {
    const items = posts
        .map(({ meta }) => {
            const url = `${SITE}/blogs/${meta.slug}`;
            return `    <item>
      <title>${escape(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${meta.date}T09:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(meta.description)}</description>
${meta.tags.map((t) => `      <category>${escape(t)}</category>`).join("\n")}
    </item>`;
        })
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Diptanshu Mahish</title>
    <link>${SITE}/blogs</link>
    <description>Notes from building things, written plainly.</description>
    <language>en</language>
    <atom:link href="${SITE}/blogs/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
}
