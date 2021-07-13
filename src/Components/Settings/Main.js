import React, { useState, useContext, useEffect } from 'react'

// Context
import { Context } from '../../StateProvider'

import '../../Style/Settings__Main.css'

function SettingsMain() {

	const [ , dispatch] = useContext(Context)
	const [ theme, setTheme ] = useState('dark')

	useEffect(() => {
		dispatch({
			type: 'CHANGE_THEME',
			theme: theme
		})
	}, [theme])

	const DisplayIcon = theme === 'dark' ? <i className="fas fa-times times"></i> : <i className="fas fa-check check"></i>
	

	return (
		<div className="settings">
			<h2 className="settings__heading">Settings</h2>
			<div className="settings__main">
				<div className="setting__line">
					<span className="line__command">Toggle Light Mode</span>
					<span className="line__checkbox" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						{ DisplayIcon }
					</span>
				</div>
			</div>
		</div>
	)
}

export default SettingsMain

