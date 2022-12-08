export default function boardsReducer(boards, action) {
    switch (action.type) {
        case "CHANGE_BOARD":

            return [
                ...boards,
                {
                    id: Date.now(),
                    title: action.payload,
                    done: false,
                    board: 'queue'
                }]

        default:
            return boards
    }


}