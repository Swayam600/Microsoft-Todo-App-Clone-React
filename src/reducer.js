export const initialState = {
	user: {
		name: 'Swayam Bhoir',
		email: 'swayambhoir5600@gmail.com',
		isLoggedIn:	false 
	},
	theme: 'dark',
	sideBarOpen: true,
	tasks: []
}

export default function reducer(state, action) {
	switch(action.type) {
		case 'LOGIN':
			return {
				...state,
				user: {
					name: action.name,
					email: action.email,
					isLoggedIn: true
				}
			}

		case 'ADD_TODO':
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						completed: false,
						task: action.task,
						star: false
					}
				]
			}

		case 'STAR':
			return {
				...state,
				tasks: state.tasks.map(item => {
					if (state.tasks.indexOf(item) === action.index) {
						item.star = action.starIt
					}
					return item
				})
			}
		case 'COMPLETE':
			return {
				...state,
				tasks: state.tasks.map(item => {
					if (state.tasks.indexOf(item) === action.index) {
						item.completed = action.complete
					}

					return item
				})
			}

		case 'CHANGE_THEME':
			return {
				...state,
				theme: action.theme
			}

		default:
			return state
	}
}