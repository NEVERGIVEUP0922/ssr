import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import index from './page/index.js'
import about from './page/about.js'

console.log('8888',index,about)
function App(opt) {
	let [count, setCount] = useState(1)
	return (
		<div>
			<Route path="/" exact component={index} title={opt.title}></Route>
			<Route path="/about" exact component={about}></Route>
		</div>
	)
}
export default App 