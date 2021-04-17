# ESLint plugin for React JSS

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
