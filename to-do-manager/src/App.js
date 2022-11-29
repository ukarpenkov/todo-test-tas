import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import TasksPage from "./pages/tasks/TasksPage";

const initialState = {
  todos: [
    { id: 0, title: 'Learn React', done: true },
    { id: 1, title: 'Learn Redux', done: false, color: 'purple' },
    { id: 2, title: 'Build something fun!', done: false, color: 'blue' }
  ],
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state, todos: [
          ...state.todos,


          action.payload,


        ]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tasksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <TasksPage />
      </div>
    </Provider>
  );
}

export default App;
