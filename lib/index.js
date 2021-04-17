module.exports.rules = {
  'prefer-object': (context) => ({
    CallExpression: (node) => {
      if (node.callee.name !== 'createUseStyles') {
        return
      }

      const firstArg = node.arguments[0]

      if (!firstArg || !firstArg.type.endsWith('FunctionExpression')) {
        return
      }

      if (!firstArg.params || firstArg.params.length !== 0) {
        return
      }

      context.report(node, 'createUseStyles: styles function doesn\'t rely on the "theme" argument. Switch to declaring styles as an object instead.')
    }
  })
}
