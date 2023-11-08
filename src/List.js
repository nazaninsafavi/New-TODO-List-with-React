import './App.css'
import React, { useContext } from 'react';
import { taskContext } from './taskContext'

const List =()=>{
    // Object Destructuring 
    const {taskItems , setTaskItems}= useContext(taskContext);

    const setDoneItems = (id)=>{
        const index = taskItems.findIndex(t=>t.id ===id);
        let newTaskItems = [...taskItems]
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
    }

    const handleDeleteTask = (id)=>{
        let newTasks = taskItems.filter(t=>t.id !== id);
        setTaskItems(newTasks);
    }
     // Conditional Rendering
     if(taskItems.length){
        return(
            <div className='lists'>
            
                 <ul className='list-group m-0 p-0 mt-2'>
                    {
                        taskItems.map(t=>(
                            <li className={`list-group-item d-flex justify-content-between ${t.done?"list-group-item-success":"" }`}>
                                {t.title}
                            <span> 
                                {
                                    t.done ? (
                                        <i className='me-3 fa fa-times text-warning ' onClick={()=>setDoneItems(t.id)}></i>
                                    ):(
                                        <i className='me-3 fa fa-check text-success ' onClick={()=>setDoneItems(t.id)}></i>
                                    )
                                }
                                
                                
                                <i className='me-3 fa fa-trash text-danger ' onClick={()=>handleDeleteTask(t.id)}></i>
                            </span>
                        
                        </li>
                        ))
                    }
                 
                 
             </ul>
           
        </div>
        
    )

    }else{
        return <h2 className='text-center text-danger mt-4'>There is no Tasks!</h2>
    }
    
}
export default List