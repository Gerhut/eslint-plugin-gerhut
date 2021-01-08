const { RuleTester } = require('eslint')
const rule = require('../../rules/no-empty-object-literal')

const ruleTester = new RuleTester()

ruleTester.run('no-empty-object-literal', rule, {
  valid: [
    {
      code: 'var a = { a: 1 }'
    }
  ],
  invalid: [
    {
      code: 'var a = {}',
      errors: ['Empty object literials (`{}`) is not allowed, use `Object.create(null)` instead.'],
      output: 'var a = Object.create(null)'
    },
    {
      code: 'var a = {}, b = Object.create(null)',
      errors: ['Empty object literials (`{}`) is not allowed, use `Object.create(null)` instead.'],
      output: 'var a = Object.create(null), b = Object.create(null)'
    },
    {
      code: 'function a() { console.log({}) }',
      errors: ['Empty object literials (`{}`) is not allowed, use `Object.create(null)` instead.'],
      output: 'function a() { console.log(Object.create(null)) }'
    },
    {
      code: 'var Object = 1, a = {}',
      errors: ['Empty object literials (`{}`) is not allowed, use `Object.create(null)` instead.']
    },
    {
      code: 'var Object = 1; function a() { console.log({}) }',
      errors: ['Empty object literials (`{}`) is not allowed, use `Object.create(null)` instead.']
    }
  ]
})
