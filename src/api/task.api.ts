import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskDTO } from "./dto/task.dto";

export class TaskAPI {
    public static async getAll(): Promise<TaskDTO[]>{
        const resp = await fetch("http://localhost:4500/api/tasks", {
            method: "GET"
        });

        const data = await resp.json();
        return data;
    }

    public static async createOne(createRequest: CreateTaskDTO){
        const resp = await fetch("http://localhost:4500/api/tasks", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(createRequest)
        });

        const data = await resp.json();
        return data;
    }

    public static async deleteOne(taskId: string){
        await fetch(`http://localhost:4500/api/tasks/${taskId}`, {
            method: "DELETE",
        });
    }
}