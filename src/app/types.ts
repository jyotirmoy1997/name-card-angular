interface User {
    id : string,
    name : string,
    avatar : string
}

interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}


export { User, Task }