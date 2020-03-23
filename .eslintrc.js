module.exports = {
    env: { es6: true, node: true, browser: true },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'prettier',
        'plugin:react/recommended',
    ],
    plugins: ['prettier', 'react'],
    rules: {
        'prettier/prettier': 'error',
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'react/prop-types': 'warn',
        'no-constant-condition': 'warn',
    },
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use
            pragma: 'React',
            version: '16.13', // It will default to "detect" in the future
            flowVersion: '0.53', // Flow version
        },
    },
};
