module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["next/core-web-vitals", "google", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react"],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "new-cap": "off",
        "no-unused-vars": "off",
        "react/jsx-curly-brace-presence": "warn",
        "react/jsx-key": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-uses-react": "off",
        "react/no-direct-mutation-state": "warn",
        "react/no-unused-state": "warn",
        "react/react-in-jsx-scope": "off",
        "require-jsdoc": "off",
    },
};
