import Text from "./components/Text";
import LixeiraIcon from './assets/icons/lixeira.svg?react'
import AddIcon from './assets/icons/add.svg?react'
import CancelIcon from './assets/icons/cancel.svg?react'
import LapisIcon from './assets/icons/lapis.svg?react'
import ListIcon from './assets/icons/list.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import Icon from "./components/Icon";
import Badge from "./components/Bagde";
import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import InputText from "./components/InputText";



export default function App() {

  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-1">
        <Text variant={"body-sm-bold"} className="text-pink-base">
          Olá mundo!
        </Text>
        <Text className="text-green-base">
          Olá Mundo
        </Text>
        <Text variant={"body-md-bold"}>
          Olá mundo!
        </Text>
        <Text>
          Levar o dog para passear
        </Text>
      </div>

    <div className="flex gap-1">
      
    </div>
      <Icon svg={LixeiraIcon} className="fill-green-base"/>
      <Icon svg={AddIcon} />
      <Icon svg={CancelIcon} />
      <Icon svg={LapisIcon} />
      <Icon svg={ListIcon} />
      <Icon svg={SpinnerIcon} animate/>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>

      <div>
        <Button icon={AddIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={LixeiraIcon} />
        <ButtonIcon icon={LixeiraIcon} variant={"secondary"}/>
        <ButtonIcon icon={LixeiraIcon} variant={"tertiary"}/>
      </div>

      <div>
        <InputText />
      </div>
    </div>
  )
}

