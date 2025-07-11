import Button from "../components/Button";
import Add from '../assets/icons/add.svg?react'
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";
import { TaskState, type Task } from "../models/task";

export default function TasksList() {
    const { task, isLoadingTasks } = useTasks()
    const { prepareTask } = useTask()

    function handleNewTask() {
        prepareTask()
    }

    return (
        <>
            <section>
                <Button 
                    icon={Add} 
                    className="w-full" 
                    onClick={handleNewTask}
                    disabled={task.some((task) => task.state === TaskState.Creating) || isLoadingTasks}
                >
                    Nova tarefa
            </Button>
            </section>

            <section className="space-y-2">
                {!isLoadingTasks && task.map((task) => (
                    <TaskItem key={task.id} task={task}/>
                ))}
                {isLoadingTasks && <>
                    <TaskItem task={{} as Task} loading/>
                    <TaskItem task={{} as Task} loading/>
                    <TaskItem task={{} as Task} loading/>
                </>}
            </section>
        </>
    )
}