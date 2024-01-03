import { TaskItem } from "./TaskItem"

export function TaskList({tasks,toggleTask,deleteTask}){
    return (<ul className="list">
     {tasks.length === 0 && "No tasks"}

     {tasks.map(task => {
      return ( 
        <TaskItem 
        {...task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        key={task.id}
        />
        )
        })}
    </ul>
    )
}