const { forwardTo } = require('prisma-binding');

const Query = {
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
  item: forwardTo('db'),
  items: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  async users(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('Вы должны быть авторизованы');
    }
    console.log(ctx.request.userId);
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE', 'USER']);
    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You arent logged in!');
    }
    const order = await ctx.db.query.order(
      {
        where: { id: args.id },
      },
      info
    );
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes('ADMIN','USER');
    if (!ownsOrder || !hasPermission) {
      throw new Error('Нету прав для этого');
    }
    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('Вы должны быть авторизованы');
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  },
};

module.exports = Query;
