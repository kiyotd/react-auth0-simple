module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "rules": {
    "indent": ["error", 2], // 4(default)
    "semi": ["error", "always"], // always(default), never
    "quotes": ["error", "double"], //double(default), single, backtick
    "linebreak-style": ["error", "unix"], //unix(default), windows
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off"
  }
};
