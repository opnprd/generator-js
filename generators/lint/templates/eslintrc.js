module.exports = {
  env: { 
    jest: true,
    node: true,
  },
  parserOptions: { ecmaVersion: 6 },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'quote-props': ['warn', 'as-needed'],
  },
};
