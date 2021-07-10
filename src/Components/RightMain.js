import React, { useState, useContext } from 'react'

// Style
import '../Style/RigthMain.css'

// Components
import Task from './Task'

// Context
import { Context } from '../StateProvider'


function RightMain() {

	const [task, setTask] = useState('')

	const [ { tasks } , dispatch] = useContext(Context)

	const Tasks = tasks.map(item => <Task
										key={tasks.indexOf(item)}
										task={item.task}
										star={item.star}
										completed={item.completed}
										index={tasks.indexOf(item)}
									/>)

	const handleClick = e => {

		e.preventDefault()

		dispatch({
			type: 'ADD_TODO',
			task: task
		})

		setTask('')
	}

	return (
		<div className="rm">
			<div className="rm__header">
				<div className="header__left">
					<h2 className="rm__heading">Tasks <i className="fas fa-home"></i></h2>
				</div>
				<div className="header__right">
					<i className="fas fa-ellipsis-h"></i>
				</div>
			</div>

			<div className="tasks">
				{ Tasks }
			</div>

		{/*	bottom input field */}

			<div className="input__box">
				<input
					placeholder="Today's Task"
					className="input__field"
					type="text"
					value={task}
					onChange={e => setTask(e.target.value)}
				/>
				<button
					onClick={handleClick}
					className="add-btn"
				>Add
				</button>
			</div>
		</div>
	)
}

export default RightMain