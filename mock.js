const KoaServer = require('koa') 
const Router = require('koa-router') 
const cors = require('@koa/cors');

const port = 9090
const app = new KoaServer()
const routers = new Router()
app.use(cors())

routers.get('/api/list', ctx => {
    ctx.body = {
        code: 0,
        list: [
            { name: '北京', code: 0 },
            { name: '深圳', code: 1 },
            { name: '武汉', code: 2 },
            { name: '郑州', code: 3 },
            { name: '天津', code: 4 },
        ]
    }
})
app.use(routers.routes())
app.listen(port, () => {
    console.log(`mock${port}启动成功`)
})
