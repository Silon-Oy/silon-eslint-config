const baseConfig = require( './index' );

module.exports = {
    ...baseConfig,
    extends: [
        ...baseConfig.extends.filter( ( item ) => item !== 'plugin:@wordpress/eslint-plugin/esnext' ),
        'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
    ],
    rules: {
        ...baseConfig.rules,
        'react/jsx-indent-props': [ 'error', 4 ],
        'react/jsx-indent': [ 'error', 4 ],
    },
};
