import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */

console.log('------- recommended');
console.log(pluginJs.configs.recommended);
console.log('--- ts');
console.log(tseslint.configs.recommended);

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['**/dist/'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: 'marcin',
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
