import Button from "../components/Button";
import Add from '../assets/icons/add.svg?react'
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";
import { TaskState } from "../models/task";

export default function TasksList() {
    const { task } = useTasks()
    const { prepareTask } = useTask()

    console.log(task)

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
                    disabled={task.some((task) => task.state === TaskState.Creating)}
                >
                    Nova tarefa
            </Button>
            </section>

            <section className="space-y-2">
                {task.map((task) => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </section>
        </>
    )
}