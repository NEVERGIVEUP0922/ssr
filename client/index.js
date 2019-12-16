import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../src/store/store';
import routes from '../src/app'

const page = (
	<Provider store={getClientStore()}>
		<BrowserRouter>
			{
				routes.map(route => {
					return <Route {...route}></Route>
				})
			}
		</BrowserRouter>
	</Provider>
)
console.log(999,page)
ReactDOM.hydrate(
	page,
	document.getElementById('root')
)