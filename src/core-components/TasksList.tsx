import Button from "../components/Button";
import Add from '../assets/icons/add.svg?react'
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks";

export default function TasksList() {
    const { tasks } = useTasks()

    console.log(tasks)

    return (
        <>
            <section>
                <Button icon={Add} className="w-full">Nova tarefa</Button>
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