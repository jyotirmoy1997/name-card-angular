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

interface FormData{
    title : string,
    summary : string,
    date : string
}


export { User, Task, FormData }