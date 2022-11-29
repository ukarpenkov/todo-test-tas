const baseUrl = 'https://638619a1beaa645826731bbd.mockapi.io/api/v1/tasks'

export const CreateTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'applicatoin/json;utc-8'
        },
        mode: 'no-cors',
        body: JSON.stringify(taskData)
    }
    ).then(response => {
        if (!response.ok) {
            throw new Error('Faild to create taks')
        }

    })
}

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(tasksList =>
            tasksList.map(({ _id, ...tasks }) => ({
                id: _id,
                ...tasks

            })))
}
