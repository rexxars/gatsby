const { LocalNodeModel } = require(`./node-model`)
const { defaultFieldResolver } = require(`./resolvers`)

const withResolverContext = (context, schema, customContext) => {
  const nodeStore = require(`../db/nodes`)
  const createPageDependency = require(`../redux/actions/add-page-dependency`)

  return {
    ...context,
    ...customContext,
    defaultFieldResolver,
    nodeModel: new LocalNodeModel({
      nodeStore,
      schema,
      createPageDependency,
      path: context.path,
    }),
  }
}

module.exports = withResolverContext
