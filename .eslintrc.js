module.exports = {
    "overrides": [
      {
        "files": ["**.ts", "**.tsx"],
        "extends": [
          "react-app",
          "airbnb",
          "plugin:import/typescript"
        ],
        "rules": {
          // Airbnb Overrides
          "camelcase": 0,
          "import/prefer-default-export": 0,
          "import/extensions": 0,
          "jsx-quotes": ["error", "prefer-single"],
          "max-len": ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          }],
          "react/jsx-filename-extension": [2, { "extensions": [".tsx"] }], // Allow .tsx
          "react/jsx-props-no-spreading": 0,
          "react/prop-types": 0, // TypeScript takes care of this
          "spaced-comment": [2, "always", { "markers": ["/"] }], // support triple-slash directives for Typescript
  
          // Enable extra rules
          "react/jsx-sort-props": ["error", {
            "callbacksLast": false,
            "shorthandFirst": false,
            "shorthandLast": false,
            "ignoreCase": true,
            "noSortAlphabetically": false,
            "reservedFirst": false
          }],
        },
      },
    ],
  };