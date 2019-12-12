import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './containers/index.js'
import About from './containers/about.js'

// console.log('8888',index,about)
function App(opt) {
	let [count, setCount] = useState(1)
	return (
		<div>
			<Route path="/" exact component={Index} ></Route>
			<Route path="/about" exact component={About}></Route>
		</div>
	)
}
export default App 

