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

export default function TaskItem() {
    const [isEditing, setIsEditing] = React.useState<boolean>(false)

    function handleEditTask(){
        setIsEditing(true)
    }

    function handleCancelEditTask(){
        setIsEditing(false)
    }

    return (
        <Card size={"md"} className="flex items-center gap-4">
            {!isEditing ?
                <>
                    <InputCheckbox />
                    <Text className="flex-1">Fazer compras da semana</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={Lixeira} variant={"tertiary"} />
                        <ButtonIcon icon={Lapis} variant={"tertiary"} onClick={handleEditTask}/>
                    </div>
                </>
                : (
                    <>
                        <InputText className="flex-1"/>
                        <div className="flex gap-1">
                            <ButtonIcon icon={Cancel} variant={"secondary"} onClick={handleCancelEditTask}/>
                            <ButtonIcon icon={Check} variant={"primary"} />
                        </div>
                    </>
                )}
        </Card>
    )
}