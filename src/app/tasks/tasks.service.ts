import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { FormData, Task } from "../types";

@Injectable({providedIn : 'root'})
export class TasksService{
    private tasks : Task[] = dummyTasks

    getUserTasks(userId : string){
        return this.tasks.filter(task => task.userId === userId)
    }

    deleteTask(id : string){
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }

    addNewTask(task : FormData, userId : string){
        this.tasks.push({
            id : 't4',
            userId : userId,
            title : task.title,
            summary : task.summary,
            dueDate : task.date
          })
    }
}