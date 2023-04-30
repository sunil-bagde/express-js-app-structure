module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13, // 2022
        sourceType: "module",
    },
    extends: ["plugin:@typescript-eslint/recommended"],
    env: { node: true },
    rules: {
        indent: "off",
        "@typescript-eslint/indent": "off",
    },
};
