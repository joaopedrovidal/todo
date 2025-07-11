import ButtonIcon from "../components/ButtonIcon";
import Card from "../components/Card";
import InputCheckbox from "../components/InputCheckbox";
import Text from "../components/Text";
import Lixeira from '../assets/icons/lixeira.svg?react'
import Lapis from '../assets/icons/lapis.svg?react'
import Cancel from '../assets/icons/cancel.svg?react'
import Check from '../assets/icons/confirm.svg?react'
import React from "react";
import InputText from "../components/InputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";
import Skeleton from "../components/Skeleton";

interface TaskItemProps {
    task: Task;
    loading?: boolean;
}


export default function TaskItem({ task, loading }: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating)
    const [taskTitle, setTaskTitle] = React.useState("")

    const { updateTask, updateTaskStatus, deleteTask, isDeletingTask, isUpdatingTask } = useTask()

    function handleEditTask() {
        setIsEditing(true)
    }

    function handleCancelEditTask() {
        if (task.state === TaskState.Creating) {
            deleteTask(task.id)
        }
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await updateTask(task.id, { title: taskTitle })
        setIsEditing(false)
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked
        updateTaskStatus(task.id, checked)
    }

    async function handleDeleteTask() {
        await deleteTask(task.id)
    }

    return (
        <Card size={"md"} >
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <InputCheckbox
                        checked={task?.concluded}
                        onChange={handleChangeTaskStatus}
                        loading={loading}
                    />
                    {!loading ? <Text
                        className={cx("flex-1", {
                            'line-through': task?.concluded,
                        })}
                    >
                        {task?.title}
                        </Text> 
                    : 
                        <Skeleton className="flex-1 h-6"/>
                    }
                    <div className="flex gap-1">
                        <ButtonIcon
                            onClick={handleDeleteTask}
                            type="button"
                            icon={Lixeira}
                            variant={"tertiary"}
                            loading={loading}
                            handling={isDeletingTask}
                        />
                        <ButtonIcon
                            type="button"
                            icon={Lapis}
                            variant={"tertiary"}
                            onClick={handleEditTask}
                            loading={loading}
                        />
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                    <InputText
                        value={taskTitle}
                        className="flex-1"
                        onChange={handleChangeTaskTitle}
                        required
                        autoFocus

                    />
                    <div className="flex gap-1">
                        <ButtonIcon
                            type='button'
                            icon={Cancel}
                            variant={"secondary"}
                            onClick={handleCancelEditTask}
                        />
                        <ButtonIcon
                            type="submit"
                            icon={Check}
                            variant={"primary"}
                            handling={isUpdatingTask}
                        />
                    </div>
                </form>
            )}
        </Card>
    )
}