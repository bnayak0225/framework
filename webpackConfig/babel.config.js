"use strict";
module.exports = {
    compact: true,
    presets: [
        [
            '@babel/preset-env',
            { 'modules': false },
        ],
        '@babel/preset-react',
        '@babel/typescript',
    ],
    plugins: [
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-class-properties',
        '@babel/proposal-optional-chaining',
        '@babel/syntax-dynamic-import',
        '@babel/plugin-transform-runtime',
        'transform-require-context',
        "@babel/plugin-transform-react-jsx",
        'macros',
    ],
    env: {
        test: {
            plugins: [
                '@babel/transform-modules-commonjs',
                '@babel/plugin-transform-runtime',
                '@babel/syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
            ]
        },
        tooling: {
            presets: [
                [
                    '@babel/env',
                    {
                        modules: 'commonjs'
                    },
                ],
                '@babel/typescript',
            ]
        }
    }
};
//# sourceMappingURL=babel.config.js.map