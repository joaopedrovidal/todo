import Button from "../components/Button";
import Add from '../assets/icons/add.svg?react'
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";

export default function TasksList() {
    const { tasks } = useTasks()
    const { prepareTask } = useTask()

    console.log(tasks)

    function handleNewTask(){
        prepareTask()
    }

    return (
        <>
            <section>
                <Button icon={Add} className="w-full" onClick={handleNewTask}>Nova tarefa</Button>
            </section>

            <section className="space-y-2"> 
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>
    )
}