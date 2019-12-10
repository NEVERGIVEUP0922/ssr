import react from 'react'
import { renderToString } from 'react-dom/server'
import statis from 'koa-static'
import Koa from 'koa'
import Router from 'koa-router'
import App from '../src/app'

const port = 9898
const app = new Koa()
const routers = new Router()
app.use(statis(process.cwd() + '/public'))

routers.get('*', ctx => {
	const text = renderToString(App)
	ctx.body = `
	<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
    </head>
    <body>
        <div id="root">${text}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
	`
})
app.use(routers.routes())
app.listen(port, () => {
	console.log('启动成功' + port)
})