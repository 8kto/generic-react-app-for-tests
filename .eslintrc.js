module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'simple-import-sort',
  ],
  rules: {
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': ['warn'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'newline-before-return': 'error',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages.
              // Things that start with a letter (or digit or underscore),
              // or `@` followed by a letter.
              ['^@?\\w'],
              // Absolute imports and other imports such as Vue-style `@/foo`.
              // Anything not matched in another group.
              ['^'],
              // Relative imports.
              // Anything that starts with a dot.
              ['^\\.'],
              // Side effect imports.
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
