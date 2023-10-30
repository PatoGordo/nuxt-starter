// .eslintrc.cjs

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "no-use-before-define": "off",
    "vue/multi-word-component-names": "off",
  },
};
