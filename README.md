# eslint-plugin-gerhut

Additional ESLint rules I used.

## Install

```shell
npm install --save-dev eslint-plugin-gerhut
```

Make your eslintrc extend the config `plugin:gerhut/all`.

## Rules

### Disable empty object literals (`no-empty-object-literal`)

(fixable) The --fix option on the command line automatically fixes problems reported by this rule.

Examples of **incorrect** code for this rule:

```JavaScript
/* eslint gerhut/no-empty-object-literal: error */

const a = {};

console.log({});

Object.assign({}, { a: 1 })
```

Examples of **correct** code for this rule:

```JavaScript
/* eslint gerhut/no-empty-object-literal: error */

const a = Object.create(null);

console.log(Object.create(null));

Object.assign(Object.create(null), { a: 1 })
```

## License

MIT
