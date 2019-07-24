module.exports = {
  tabWidth: 2,
  printWidth: 100,
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
}
