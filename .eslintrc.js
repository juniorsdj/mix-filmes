module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "react-native"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-const-assign": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unreachable": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "warn",
    "constructor-super": "error",
    "valid-typeof": "warn",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-no-duplicate-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-no-undef": [
      "error",
      {
        "allowGlobals": false
      }
    ],
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": 2
  }
}