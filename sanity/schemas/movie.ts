export default {
  name: "movie",
  title: "Movie",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "poster", type: "image", options: { hotspot: true } },
    {
      name: "rating",
      type: "number",
      validation: (Rule: { min: (n: number) => unknown; max: (n: number) => unknown }) =>
        Rule.min(0).max(10),
    },
    { name: "releaseDate", type: "date" },
    { name: "language", type: "string" },
    {
      name: "ottPlatform",
      type: "string",
      description: "e.g. Netflix, Prime Video",
    },
  ],
};
