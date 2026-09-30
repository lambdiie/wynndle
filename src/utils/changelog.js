import fm from "front-matter";

const files = import.meta.glob("../changelog/*.md", {
  query: "?raw", // import as plain text
  import: "default", // gives string directly instead of wrapping it in object
  eager: true, // imports all at once instead of lazy loading
});

export const entries = Object.values(files)
  .map((raw) => {
    // fm splits markdown files into attributes (yaml values at the top) and body
    const { attributes, body } = fm(raw);
    return { ...attributes, body };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // order by date