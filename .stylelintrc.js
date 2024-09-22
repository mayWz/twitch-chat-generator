module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss", // https://stylelint.io/user-guide/get-started/#linting-everything-else
    "stylelint-config-prettier-scss",
    "stylelint-config-property-sort-order-smacss",
  ],
  rules: {
    // indentation: 2,
    "no-descending-specificity": null,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["overflow-scrolling"],
      },
    ],
    "selector-class-pattern": null,
    "selector-nested-pattern": null,
    "custom-property-pattern": null,
    "keyframes-name-pattern": null,
    "scss/percent-placeholder-pattern": null,
    "declaration-block-no-duplicate-properties": true,
    // 'string-quotes': 'single',
    "font-family-no-missing-generic-family-keyword": null,
    // 'color-hex-case': 'lower',
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "block-no-empty": null,
    "scss/no-global-function-names": null,
    // 'selector-combinator-space-before': 'always',
    // 'selector-combinator-space-after': 'always',
  },
};
