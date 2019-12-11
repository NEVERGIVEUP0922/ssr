import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import statis from 'koa-static'
import Koa from 'koa'
import Router from 'koa-router'
import { StaticRouter } from 'react-router-dom'
import App from '../src/app'
import store from '../src/store/store'

const port = 9898
const app = new Koa()
const routers = new Router()
app.use(statis(process.cwd() + '/public'))

routers.get('*', ctx => {
    const text = renderToString(
        <Provider store={store}>
            <StaticRouter location={ctx.req.url}>
                <App title="ssr-同构"></App>
            </StaticRouter>
        </Provider>
    )
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