'use strict';

module.exports = Object.freeze({
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed', {
      'requireForBlockBody': true
    }],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error', {
      'properties': 'never'
    }],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'error',
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always', {
      'null': 'ignore'
    }],
    'func-name-matching': 'error',
    'indent': ['off', 2, {
      'ArrayExpression': 'off',
      'SwitchCase': 1,
      'CallExpression': {
        'arguments': 'off'
      },
      'FunctionDeclaration': {
        'parameters': 'off'
      },
      'FunctionExpression': {
        'parameters': 'off'
      },
      'MemberExpression': 'off',
      'ObjectExpression': 'off',
      'ImportDeclaration': 'off'
    }],
    'handle-callback-err': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      'code': 80,
      'ignorePattern': 'function \\w+\\(',
      'ignoreUrls': true
    }],
    'max-statements-per-line': ['error', {
      'max': 1
    }],
    'new-cap': ['error', {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 'error',
    'no-buffer-constructor': 'error',
    'no-console': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-func-assign': 'off',
    'no-implicit-coercion': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 1
    }],
    'no-nested-ternary': 'error',
    'no-param-reassign': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'off',
    'no-shadow-restricted-names': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'none',
      'caughtErrors': 'none',
      'ignoreRestSiblings': false
    }],
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': false
    }],
    'no-useless-escape': 'off',
    'no-var': 'error',
    'nonblock-statement-body-position': ['error', 'below'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {
      'destructuring': 'all',
      'ignoreReadBeforeAssign': true
    }],
    'prefer-template': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'spaced-comment': ['error', 'always', {
      'exceptions': ['!']
    }],
    'space-before-blocks': 'error',
    'strict': 'error',
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside']
  }
});
