'use strict'

const ShieldMiddleware = use('Adonis/Middleware/Shield')
const Config = use('Config')

class SelectiveShield {
  async handle(ctx, next) {
    const url = ctx.request.url()

    // UNTUK BANYAK ROUTE
    // const exemptPaths = ['/auth', '/tasks']

    // if (exemptPaths.some(path => url.startsWith(path))) {
      // return next()
    // }

    if (url.startsWith('/auth')) {
      return next()
    }

    const shield = new ShieldMiddleware(Config)
    return shield.handle(ctx, next)
  }
}

module.exports = SelectiveShield
