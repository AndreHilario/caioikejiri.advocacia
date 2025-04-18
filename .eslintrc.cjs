module.exports = {
  root: true,
  env: {
      browser: true,
      es2021: true,
      es6: true,
      node: true,
  },
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
          tsx: true,
          jsx: true,
      },
  },

  overrides: [
      {
          files: ['**/*.ts', '**/*.tsx'],
          parser: '@typescript-eslint/parser',

          settings: {
              'react': { version: 'detect' },
              'import/resolver': {
                  typescript: {},
              },
          },
          env: {
              browser: true,
              node: true,
              es6: true,
          },
          extends: [
              'plugin:import/errors',
              'plugin:import/warnings',
              'plugin:import/typescript',
              'plugin:react/recommended',
              'plugin:react-hooks/recommended',
              'plugin:jsx-a11y/recommended',
              'plugin:testing-library/react',
              'plugin:jest-dom/recommended',
              'plugin:@typescript-eslint/recommended',
          ],
          rules: {
              'no-restricted-imports': [
                  'error',
                  {
                      patterns: [
                          '@/api/*/*',
                          '@/features/*/*',
                          '@/stores/*/*',
                          '@/components/*/*',
                          '@/constants/*/*',
                          '@/lib/*/*',
                          '@/types/*/*',
                          '@/utils/*/*',
                      ],
                  },
              ],

              'linebreak-style': ['error', 'windows'],
              'react/prop-types': 'off',

              'import/order': [
                  'error',
                  {
                      'groups': [
                          'index',
                          'sibling',
                          'parent',
                          'internal',
                          'external',
                          'builtin',
                          'object',
                          'type',
                      ],
                      'newlines-between': 'always',
                  },
              ],
              'sort-imports': [
                  'error',
                  {
                      ignoreCase: true,
                      ignoreDeclarationSort: true,
                  },
              ],
              'import/default': 'off',
              'import/no-named-as-default-member': 'off',
              'import/no-named-as-default': 'off',
              'import/newline-after-import': ['error', { count: 1 }],
              'react/react-in-jsx-scope': 'off',

              'jsx-a11y/anchor-is-valid': 'off',

              '@typescript-eslint/no-unused-vars': ['error'],

              '@typescript-eslint/explicit-function-return-type': ['off'],
              '@typescript-eslint/explicit-module-boundary-types': ['off'],
              '@typescript-eslint/no-empty-function': ['off'],
              '@typescript-eslint/no-explicit-any': ['off'],

              'react/jsx-first-prop-new-line': [2, 'multiline'],
              'react/jsx-max-props-per-line': [2, { maximum: 2, when: 'multiline' }],
              'react/jsx-indent-props': [2, 2],
              'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
          },
          plugins: ['prettier'],
      },
  ],
};
