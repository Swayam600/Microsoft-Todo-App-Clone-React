import React, { useState, useContext } from 'react'

// Context
import { Context } from '../StateProvider'

// Style
import '../Style/Login.css'

function Login() {

	const [ user, setUser ] = useState({
		name: '',
		email: ''
	})

	const [ , dispatch ] = useContext(Context)

	const handleClick = e => {
		e.preventDefault()

		if (user.name.length !== 0 && user.email.length !== 0) {
			dispatch({
				type: 'LOGIN',
				...user
			})
		} else {
			alert('Username and Email must be provided')
		}

	}

	return (
		<div className="form__container">
			<div className="form">
				<h2 className="form__heading">Log In</h2>
				<strong>Name</strong>
				<input
					className="form__input"
					type="text"
					value={user.name}
					onChange={e => {
						setUser({
							...user,
							name: e.target.value
						})
					}}
				/>
				<strong>Email</strong>
				<input
					className="form__input"
					type="text"
					value={user.email}
					onChange={e => {
						setUser({
							...user,
							email: e.target.value
						})
					}}
				/>
				<button
					className="form__btn"
					onClick={handleClick}
				>Log in</button>
			</div>
		</div>
	)
}

export default Login
