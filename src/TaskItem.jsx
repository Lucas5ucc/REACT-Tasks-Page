export function TaskItem({completed, id, title, toggleTask , deleteTask}){
   return ( 
   <li>

            <label>
                <input type="checkbox" checked={completed}
                onChange={e => toggleTask(id,e.target.checked)}
               />
                {title}
            </label>

            <button 
            onClick={() => deleteTask(id)} 
            className="btn btn-danger">Delete</button>

    </li>
   )
}