module.exports = {
  semi: true,
  trailingComma: "none",
  singleQuote: false,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: "**/*.{yaml,yml}",
      options: {
        parser: "yaml",
        tabWidth: 2,
      },
    },
    {
      files: "**/*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: "**/*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
};
