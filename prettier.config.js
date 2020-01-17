module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ['*.html'],
      options: {
        singleQuote: false,
        htmlWhitespaceSensitivity: 'css',
        parser: 'html'
      }
    }
  ]
}
