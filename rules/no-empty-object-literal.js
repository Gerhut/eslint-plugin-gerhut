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
          context.report({
            message,
            node,
            fix(fixer) {
              return fixer.replaceText(node, 'Object.create(null)')
            }
          })
        }
      }
    }
  }
}
