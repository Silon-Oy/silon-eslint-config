const baseConfig = require( './index' );

module.exports = {
    extends: [
        ...baseConfig.extends,
        'plugin:cypress/recommended',
    ],
    env: {
        'cypress/globals': true,
        'node': true,
    },
    rules: {
        ...baseConfig.rules,
        'chai-friendly/no-unused-expressions': 2,
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
        'cypress/no-async-tests': 'error',
        'cypress/no-pause': 'error',
    },
    plugins: [
        'chai-friendly',
        'cypress',
    ],
};
