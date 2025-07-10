import Container from "../components/Container"
import TaskItem from "../core-components/TaskItem"
import TasksList from "../core-components/TasksList"
import TasksSumary from "../core-components/TasksSumary"

export default function PageHome(){
    return ( 
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSumary />
            </header>

            <TasksList />
        </Container>
    )        
}