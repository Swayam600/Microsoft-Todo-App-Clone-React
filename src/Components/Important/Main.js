import React, { useContext } from 'react'

import Task from '../Task'

// Style
import '../../Style/Important__Main.css'

// Context
import { Context } from '../../StateProvider'

function ImportantMain() {

	const [ { tasks }, ] = useContext(Context)

	const DisplayTasks = tasks
							  .filter(item => item.star === true)
							  .map(item => <Task task={item.task} star={item.star} completed={item.completed} />)

	return (
		<div className="important">
			<h2 className="important__heading">
				Important <i className="far fa-star"></i>
			</h2>
			<div className="tasks">
				{ DisplayTasks.length === 0 ? <h2>This is where you'll find your Important Tasks</h2> : DisplayTasks }
			</div>
		</div>
	)
}

export default ImportantMain
