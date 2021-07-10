import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Style
import '../Style/Main.css'

// Components
import SideBar from './SideBar'
import RightMain from './RightMain'
import ImportantMain from './Important/Main'
import SettingsMain from './Settings/Main'

// Context

function Home() {


	return (
		<div className="home">
			<Router>
				<SideBar />
				<Switch>
					<Route path="/important" >
						<ImportantMain />
					</Route>
					<Route path="/settings">
						<SettingsMain />
					</Route>
					<Route path="/">
						<RightMain />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default Home
