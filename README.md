# ESLint plugin for React JSS
<a href="https://www.npmjs.com/package/eslint-plugin-react-jss"><img src="https://img.shields.io/npm/dm/eslint-plugin-react-jss" /></a>
<a href="https://www.npmjs.com/package/eslint-plugin-react-jss"><img src="https://img.shields.io/npm/v/eslint-plugin-react-jss" /></a>
<a href="https://www.npmjs.com/package/eslint-plugin-react-jss"><img src="https://img.shields.io/github/license/afzalsayed96/babel-plugin-transform-stitches-display-name" /></a>
</p>

React JSS specific linting rules for ESLint.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install --save-dev eslint
```

Similarly, install eslint-plugin-react-jss

```sh
$ npm install --save-dev eslint-plugin-react-jss
```

# Configuration

Add `plugins` section and specify and ESLint-plugin-react-jss as a plugin.

```json
{
  "plugins": ["react-jss"]
}
```

Finally, enable the rules that you would like to use.

```json
{
  "rules": {
    "react-jss/prefer-object": "warn"
  }
}
```
