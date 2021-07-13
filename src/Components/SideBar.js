import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Style
import '../Style/SideBar.css'

// Context
import { Context } from '../StateProvider'

function SideBar() {

	const [ {user, } , ] = useContext(Context)

	let [ firstName, lastName ] = ['', '']

	if (user.name.split(' ').length >= 2) {
		firstName = user.name.split(' ')[0][0]
		lastName = user.name.split(' ')[1][0]
	} else {
		firstName = user.name.split(' ')[0][0]
		lastName = ''
	}

	return (
		<div className="sb">
			<Link className="sb__link sb__account" to='/'>
				<div className="account__circle">
					{
						firstName
					}
					{
						lastName
					}
				</div>
				<div className="text">
					<div className="account__lineOne">
						{ user.name }
					</div>
					<div className="account__lineTwo">
						{ user.email }
					</div>
				</div>
			</Link>
			<Link className="sb__link" to='/'>
				<i className="fas fa-home"></i> <span className="text">Tasks</span>
			</Link>
			<Link className="sb__link" to='/important'>
				<i className="far fa-star"></i> <span className="text">Important</span>
			</Link>
			<Link className="sb__link" to="/settings">
				<i className="fas fa-cogs"></i> <span className="text">Settings</span>
			</Link>

		</div>
	)
}

export default SideBar