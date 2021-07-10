import React, { useContext } from 'react'
import '../Style/Task.css'

// Context
import { Context } from '../StateProvider'


function Task({ task, star, completed, index}) {

	const [ , dispatch ] = useContext(Context)

	const starIt = e => {

		e.preventDefault()

		dispatch({
			type: 'STAR',
			index: index,
			starIt: !star
		})
	}

	const completeIt = e => {
		e.preventDefault()

		dispatch({
			type: 'COMPLETE',
			index: index,
			complete: !completed
		})

	}


	return (
		<div className="task">
			<button
				onClick={completeIt}
				className={completed ? 'completed true' : 'completed false'}
			>
			{
				completed ? <i className="fas fa-check"></i> : ''
			}
			</button>
			<span
				className="task__task"
			>{ task }</span>
			<button
				className="task__star"
				onClick={starIt}
			>{
				star ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
			}
			</button>
		</div>
	)
}

export default Task