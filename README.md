# bslintrc

Extra BS for BS Lint.

## Usage

``` js
const js = require('bslintrc');

module.exports = [
  js.configs.recommended,
  js.configs.bcoin,
  {
    languageOptions: {
      globals: {
        ...js.globals.node
      },
      ecmaVersion: 'latest'
    }
  }
};
```

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work. `</legalese>`

## License

- Copyright (c) 2025, Christopher Jeffrey (MIT License).

See LICENSE for more info.
