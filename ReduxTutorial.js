const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export addTodo = (text) => {
	return {
		type: ADD_TODO,
		text
	}
}

export toggleTodo = (index) => {
	return {
		type: TOGGLE_TODO,
		index
	}
}

export setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

cosnt todoApp = (state = initialState, action) => {
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				]
			})
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if (index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}
					return todo
				})
			})
		default: 
			return state;	
	}
}