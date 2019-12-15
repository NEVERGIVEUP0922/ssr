import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import App from '../src/app'

const page = (
	<Provider store={store}>
		<BrowserRouter>
		<App title="ssr"></App>
		</BrowserRouter>
	</Provider>
)
ReactDOM.hydrate(
	page,
	document.getElementById('root')
)