# JavaScript the Reload way

A [Reload](https://reload.dk/) opinionated way of making sure our JS code is up to snuff.

## Usage

### Install

Install `eslint-plugin-reload`.

```sh
npm install eslint-plugin-reload --save-dev
```

Install the required peer dependencies.

Create these two files alongside your `package.json` file.

### .prettierrc.json

```json
{}
```

### .eslintrc.json

```json
{
  "extends": ["plugin:reload/recommended"]
}
```

Spin this badboy up and point eslint and prettier towards your JS files.

#### Lint

```sh
npx eslint "**/*.js" && npx prettier "**/*.js" --check
```

#### Format

```sh
npx eslint "**/*.js" --fix && npx prettier "**/*.js" --write
```

## Environment

Remember to define in your `.eslintrc.json` configuration which environments
your code is supposed to support.

```json
  "extends": ["plugin:reload/recommended"],
  "env": {
    "browser": true,
    "node": true
  }
```

If not you will get a lot of [no-undef](https://eslint.org/docs/rules/no-undef)
errors on ex. `window` and `console` variables.

## Additional rules

Wanting to add additional rules is straightforward.

### [.eslintrc.json](https://eslint.org/docs/rules/)

```json
{
  "extends": ["plugin:reload/recommended"],
  "rules": {
    "no-console": 1
  }
}
```

If wanting to extend the `eslint-plugin-reload` we need to re-apply
the prettier `eslint-config-prettier` configuration that turns off all
eslint rules that is prettiers responsability.

Imagine we wanted to apply the Github JS guidelines we would have to install
their config, extend from it and then make sure to append `eslint-config-prettier`.

```sh
npm install eslint-plugin-github eslint-config-prettier --save-dev
```

```json
{
  "extends": [
    "plugin:reload/recommended",
    "plugin:github/recommended",
    "eslint-config-prettier"
  ]
}
```

## Editor integration

The `editor_integration` directory is an example of smart editor integration
that will help you with code quality and code style on save.
The equivelant can be configured for additional editors.
PR's are encouraged to broaden the example support.
