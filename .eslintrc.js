module.exports = {
  env: { 
    jest: true,
    node: true
  },
  parserOptions: { ecmaVersion: 6 },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    quotes: ['error', 'single']
  }
};
