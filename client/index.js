import react from 'react'
import reactDom from 'react-dom'
import App from '../src/app'

reactDom.hydrate(
	App,
	document.getElementById('root')
)