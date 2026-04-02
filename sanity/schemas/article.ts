/** Paste into Sanity Studio `schemaTypes` or use with `sanity.config.ts`. */
export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule: { required: () => unknown; max: (n: number) => unknown }) =>
        Rule.required().max(100),
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (Rule: { required: () => unknown; max: (n: number) => unknown }) =>
        Rule.required().max(160),
    },
    { name: "coverImage", type: "image", options: { hotspot: true } },
    { name: "content", type: "array", of: [{ type: "block" }, { type: "image" }] },
    {
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Bollywood", value: "Bollywood" },
          { title: "Hollywood", value: "Hollywood" },
          { title: "South Indian", value: "South Indian" },
          { title: "OTT", value: "OTT" },
          { title: "Reviews", value: "Reviews" },
        ],
      },
    },
    { name: "author", type: "string" },
    { name: "publishedAt", type: "datetime" },
    { name: "tags", type: "array", of: [{ type: "string" }] },
  ],
};
