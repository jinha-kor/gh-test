module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'no-nested-ternary': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
