module.exports = {
    extends: [
        'plugin:@wordpress/eslint-plugin/esnext',
    ],
    env: {
        browser: true,
        jquery: true,
    },
    globals: {
        dp: 'readonly',
        acf: 'readonly',
        sharedScriptsObject: 'readonly',
        mainScriptsObject: 'readonly',
    },
    rules: {
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
        'indent': [ 'error', 4 ],
        'jsdoc/no-undefined-types': 'warn',
        'jsdoc/require-property-description': 'warn',
        'no-unused-expressions': 0,
        'no-unused-vars': [ 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false } ],
        'prefer-const': [ 'error', { destructuring: 'any', ignoreReadBeforeAssign: false } ],
        'quote-props': [ 'error', 'consistent' ],
        'yoda': [ 'error', 'never' ],
    },
};
