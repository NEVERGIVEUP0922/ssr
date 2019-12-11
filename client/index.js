import React from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/app'
import store from '../src/store/store'

const page = (
	<Provider store={store}>
		<BrowserRouter>
			<App title="ssr-同构" />
		</BrowserRouter>
	</Provider>
)
reactDom.hydrate(
	page,
	document.getElementById('root')
)