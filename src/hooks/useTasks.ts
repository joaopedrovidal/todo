import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTasks(){
    const [taskData] = useLocalStorage<Task[]>(TASKS_KEY, [])
    const [task, setTasks] = React.useState<Task[]>([])
    const [isLoadingTasks, setIsLoadingTasks] = React.useState<boolean>(true)

    async function fetchTask(){
        if (isLoadingTasks) {
            await delay(2000)
            setIsLoadingTasks(false)
        }

        setTasks(taskData)
    }

    React.useEffect(() => {
        fetchTask()
    }, [taskData])

    return {
        task,
        createdTasksCount: task.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: task.filter((task) => task.concluded).length,
        isLoadingTasks,
    }
}