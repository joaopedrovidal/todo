import Text from "./components/text";

export default function App() {

  return (
    <div className="flex flex-col gap-2">
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
  )
}

