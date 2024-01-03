import { useEffect, useState } from "react"
import"./styles.css"
import { NewTaskForm } from "./NewTaskForm"
import { TaskList } from "./TaskList"

export default function App() {
    
    const [tasks, setTask] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return []
        return JSON.parse(localValue)
    })

    useEffect(()=>{
      localStorage.setItem("ITEMS", JSON.stringify(tasks))  
    },[tasks])

    function addTask(title){
        setTask(currentTask =>{
            return [...currentTask, {id: crypto.randomUUID(), title, completed: false},]
         })
    }

    

    function toggleTask(id, completed){
        setTask(currentTask => {
            return currentTask.map(task =>{
                if (task.id === id){
                    return {...task, completed}
                }

                return task
            } )
        })
    }

    function deleteTask(id){
        setTask(currentTask => {
            return currentTask.filter(task => task.id !== id)
        })
    }

    return (
    <>
    <NewTaskForm onSubmit = {addTask}/>
    <h1 className="header">Todo List</h1>
    <TaskList tasks={tasks} toggleTask={toggleTask}deleteTask={deleteTask}/>
    </>
    )
}