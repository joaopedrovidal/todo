import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTasks(){
    const [task] = useLocalStorage<Task[]>(TASKS_KEY, [])

    return {
        task,
        tasksCount: task.length,
        concludedTasksCount: task.filter((task) => task.concluded).length
    }
}