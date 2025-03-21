import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },

  {
    plugins: { "@stylistic": stylistic },
  },

  {
    languageOptions: {
      globals: globals.node,
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.configs.strict,

  {
    rules: {
      "no-duplicate-imports": ["error"],
      "no-template-curly-in-string": ["warn"],
      camelcase: ["error"],
      curly: ["error", "multi"],
      "prefer-arrow-callback" : ["warn"]
    },
  },

  {
    rules: {
      "@stylistic/curly-newline": ["warn", "always"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/indent": ["warn", 2],
      "@stylistic/arrow-spacing": ["warn", { before: true, after: true }],
      "@stylistic/template-curly-spacing": ["warn", "always"],
      "@stylistic/block-spacing": ["warn"],
      "@stylistic/brace-style": ["warn", "1tbs"],
      "@stylistic/comma-spacing": ["warn", { "before": false, "after": true }],
      "@stylistic/comma-style": ["warn", "last"],
    },
  },
];
