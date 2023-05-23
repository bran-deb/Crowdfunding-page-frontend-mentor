module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        indent: [
            'error',
            4
        ],
        'import/no-duplicates': 'warn',
        'no-unused-vars': 'warn'
    }
}
