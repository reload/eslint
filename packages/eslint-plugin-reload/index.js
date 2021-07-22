"use strict";

module.exports = {
  configs: {
    recommended: {
      extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "eslint-config-prettier",
      ],
      rules: {
        "import/order": "error",
      },
    },
    typescript: {
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "eslint-config-prettier",
      ],
      rules: {
        "import/order": "error",
      },
    },
  },
};
