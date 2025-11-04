const koa = require("koa")
const Router = require('koa-router')
const router = new Router()

const bodyParser = require('koa-bodyparser')
const app = new koa()
const { initApp } = require('./init/init-app')
require('dotenv').config()
const port = process.env.PORT || 3000
app.use(bodyParser())

const asyncFunc = async (ctx, next) => {
  ctx.body = `<h1>Hello, 哈哈!</h1>`
}
router.get('/', asyncFunc)

app.use(router.routes()).use(router.allowedMethods())

console.log(process.env.APP_MODE)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

