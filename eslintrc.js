module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "overrides": {
                    "constructors": "off"
                }
            }
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-object-literal-type-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-use-before-declare": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "complexity": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "error",
        "eol-last": "off",
        "guard-for-in": "error",
        "linebreak-style": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-functions": "error",
        "no-extra-bind": "error",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-return-await": "error",
        "no-sequences": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": "error",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "quote-props": "off",
        "radix": "error",
        "some-rule": "error",
        "space-before-function-paren": "off",
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rulesDirectory": [
                    "/Users/igor/Documents/__prj/npm-audit-reporter-teamcity/node_modules/tslint-plugin-prettier/rules"
                ],
                "rules": {
                    "comment-format": [
                        true,
                        "check-space"
                    ],
                    "jsdoc-format": [
                        true,
                        "check-multiline-start"
                    ],
                    "no-duplicate-imports": true,
                    "no-duplicate-variable": [
                        true,
                        "check-parameters"
                    ],
                    "no-implicit-dependencies": true,
                    "no-reference-import": true,
                    "no-shadowed-variable": true,
                    "no-submodule-imports": true,
                    "no-unused-expression": true,
                    "object-literal-sort-keys": true,
                    "only-arrow-functions": [
                        true,
                        "allow-declarations",
                        "allow-named-functions"
                    ],
                    "ordered-imports": [
                        true,
                        {
                            "import-sources-order": "case-insensitive",
                            "module-source-path": "full",
                            "named-imports-order": "case-insensitive"
                        }
                    ],
                    "prefer-conditional-expression": true,
                    "prettier": true,
                    "triple-equals": [
                        true,
                        "allow-null-check"
                    ],
                    "variable-name": [
                        true,
                        "ban-keywords",
                        "check-format",
                        "allow-pascal-case"
                    ]
                }
            }
        ]
    }
};
