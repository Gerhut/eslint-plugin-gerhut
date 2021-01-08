const { findVariable } = require('eslint-utils')
const message = 'Empty object literials (`{}`) is not allowed, use `Object.create(null)` instead.'

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code'
  },
  create(context) {
    return {
      ObjectExpression(node) {
        if (node.properties.length === 0) {
          const descriptor = { message, node }

          const objectVariable = findVariable(context.getScope(), 'Object')
          if (objectVariable != null && objectVariable.defs.length === 0) {
            // Object exists in the environment and not redefined: provide a fix
            descriptor.fix = function fix(fixer) {
              return fixer.replaceText(node, 'Object.create(null)')
            }
          }

          context.report(descriptor)
        }
      }
    }
  }
}
