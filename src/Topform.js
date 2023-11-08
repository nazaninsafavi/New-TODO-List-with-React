import './App.css'
import {useState , useContext} from 'react'
import { taskContext } from './taskContext'

const Topform =()=>{
    const [task ,setTask] =useState("")
    const {taskItems, setTaskItems}=useContext(taskContext)

    const handleSetTask =(event)=>{
        setTask(event.target.value)
    }

    const handleAddTask =()=>{
        setTaskItems([...taskItems , {id:Math.random() , title:task , done:false}])
        setTask("")
    }
    
    return(
        <div className='form-group d-flex first-input'>
            <input type='text' className='form-control' value={task}
            onChange={handleSetTask}/>
            <button type='submit' className='btn btn-success' onClick={handleAddTask}>Add</button>
        </div>

    )
}

export default Topform