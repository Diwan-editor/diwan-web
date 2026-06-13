import nextra from "nextra";

const withNextra = nextra({
  search: true,
});

export default withNextra({
  // Next.js config options
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
});
