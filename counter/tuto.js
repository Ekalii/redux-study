const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');

const TOGGLE_VALUE = 'TOGGLE_VALUE';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const toggleValue = () => ({ type: TOGGLE_VALUE });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = diff => ({ type: DECREMENT, diff });

const initialState = {
	light: false,
	counter: 0
}

const counterApp = (state = initialState, action) => {
	switch(action.type){
		case TOGGLE_VALUE:
			return {
				...state,
				light: !state.light
			};
		case INCREMENT:
			return {
				...state,
				counter: state.counter + action.diff
			};
		case DECREMENT:
			return {
				...state,
				counter: state.counter - action.diff
			};
		default:
			return state;
	}
}

const { createStore } = Redux;

const store = createStore(counterApp);

const render = () => {
	const state = store.getState();
	const { light, counter } = state;
	if (light) {
		lightDiv.style.background = 'green';
		switchButton.innerText = '끄기';
	} else {
		lightDiv.style.background = 'gray';
		switchButton.innerText = '켜기';
	}
	counterHeadings.innerText = counter;
}

render();

store.subscribe(render);

switchButton.addEventListener('click', () => {
	store.dispatch(toggleValue());
})
plusButton.addEventListener('click', () => {
	store.dispatch(increment(10));
})
minusButton.addEventListener('click', () => {
	store.dispatch(decrement(10));
})
