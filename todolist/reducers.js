import { 
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from './actions';
import { combineReducer } from 'redux';

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                };
            });
        default:
            return state;
    };
};

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = combineReducer({
    visibilityFilter,
    todos
});

export default todoApp;