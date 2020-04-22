import { Middleware } from '../index'

export const serveMiddleware: Middleware = ({ root, app }) => {
  console.log('koa-static root',  root)
  app.use(require('koa-static')(root))
}
