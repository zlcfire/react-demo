const Koa = require("koa")
const app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'XXX'
})
app.listen(3002)