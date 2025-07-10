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

interface TaskItemProps {
    task: Task
}


export default function TaskItem({ task }: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating)
    const [taskTitle, setTaskTitle] = React.useState("")

    function handleEditTask() {
        setIsEditing(true)
    }

    function handleCancelEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log({id: task.id, title: taskTitle})
        setIsEditing(false)
    }

    return (
        <Card size={"md"} >
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <InputCheckbox
                        value={task?.concluded?.toString()}
                        checked={task?.concluded}
                    />
                    <Text
                        className={cx("flex-1", {
                            'line-through': task?.concluded,
                        })}
                    >
                        {task?.title}
                    </Text>
                    <div className="flex gap-1">
                        <ButtonIcon 
                            type="button"
                            icon={Lixeira} 
                            variant={"tertiary"} 
                        />
                        <ButtonIcon 
                            type="button"
                            icon={Lapis} 
                            variant={"tertiary"} 
                            onClick={handleEditTask} 
                        />
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                    <InputText
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
                        />
                    </div>
                </form>
            )}
        </Card>
    )
}