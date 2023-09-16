module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "eslint-config-standard-with-typescript",
  ],
  extends: [
    "standard",
    "eslint-config-standard-with-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {},
  rules: {
    "prettier/prettier": "error",
  },
}
