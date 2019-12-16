import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import statis from 'koa-static'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import Router from 'koa-router'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import routes from '../src/app'
import { getServeStore } from '../src/store/store'

const store = getServeStore()
const port = 9898
const app = new Koa()
const routers = new Router()
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }))
app.use(statis(process.cwd() + '/public'))

routers.get('*', async ctx => {
    // 根据路由渲染并组件
    let promises = []
    routes.some(route => {
        let match = matchPath(ctx.path, route)
        if (match) {
            let { loadData } = route.component
            if (loadData) promises.push(loadData(store))
        }
    })
    Promise.all(promises).then(res => {

        // 解析html
        const text = renderToString(
            <Provider store={store}>
                <StaticRouter location={ctx.url}>
                    {routes.map(route => <Route {...route}></Route>)}
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
                <script>
                    window._defaultData = ${JSON.stringify(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
            </html>
            `
    })

})
app.use(routers.routes()).use(routers.allowedMethods())
app.listen(port, () => {
    console.log('启动成功' + port)
})