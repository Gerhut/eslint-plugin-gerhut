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

          let declaredObject = false
          const ancestors = context.getAncestors(node)
          outer: for (const ancestor of ancestors) {
            const variables = context.getDeclaredVariables(ancestor)
            for (const variable of variables) {
              if (variable.name === 'Object') {
                declaredObject = true
                break outer
              }
            }
          }
          if (declaredObject === false) {
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
