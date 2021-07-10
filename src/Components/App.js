import React, { useContext } from 'react'

// Style
import '../Style/base.css'

// Component
import Main from './Main'
import Login from './Login'

// Context
import { Context } from '../StateProvider'


function App() {

	const [ { user, theme }, ] = useContext(Context)

	const Style = {
		'--main': theme === 'dark' ? '#2d2d2d' : '#ffffff',
		'--hover-main': theme === 'dark' ? '#505050' : 'lightgrey',
		'--text': theme === 'dark' ? '#e4e4e4' : '#696969'
	}

	return (
		<div style={Style} className="app">
			{ user.isLoggedIn ? <Main /> : <Login /> }
		</div>
	)
}

export default App
