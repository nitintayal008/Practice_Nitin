// actions.js
export const increment = () => ({ type: 'INCREMENT' });

// reducer.js
const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';
const store = createStore(counterReducer);

// App.js
import { Provider, useDispatch, useSelector } from 'react-redux';
import { increment } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <Provider store={store}>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </Provider>
  );
};

export default App;