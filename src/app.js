import React, { useState } from 'react'

function App(opt) {
	let [count, setCount] = useState(1)
	return (
		<div>
			<h1>hello {opt.title} {count}</h1>
			<button onClick={() => setCount(count + 1)}>累加</button>
		</div>
	)
}
export default <App title="react-ssr"></App>