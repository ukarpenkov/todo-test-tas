
export default function taskReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    done: false,
                    board: 'queue'
                }]
        case "TOGGLE_TASK":
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo
                }
            })
        case "REMOVE_TASK":
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }


}