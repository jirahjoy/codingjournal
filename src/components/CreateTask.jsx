import React, {useState, useRef} from 'react';
import DisplayTask from './DisplayTask';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Swal from 'sweetalert2';




const CreateTask = () => {

   
    let curr = new Date();
    curr.setDate(curr.getDate() + 1);
    let date = curr.toISOString().substr(0,10);
    
    const refDate = useRef(date);
    const [item, setItem] = useState({date: '', item: '', status: false});
    const [taskList, setTaskList] = useState([]);
    let localTask = localStorage.getItem('localTask') ? JSON.parse(localStorage.getItem('localTask')) : [];


    // const getDate = () => {
    //     let now = new Date();
    //     let dd = String(now.getDate()).padStart(2, '0');
    //     let mm = String(now.getMonth() + 1).padStart(2, '0');
    //     let yyyy = now.getFullYear();
    //     now = yyyy + '/' + mm + '/' + dd;
    //     console.log(now);
    // }

    const onChange = (e) =>{
        let {value} = e.target;
        let obj = {};
        obj['item'] = value;
        obj['status'] = false;
        obj['date'] = refDate.current.value;
        setItem(obj);
    }
    const addTask = (e) =>{
        const {name} = e.target;
        
            if(item.item !== '' && item.date !== ''){
                localTask.unshift(item);
                localStorage.setItem('localTask', JSON.stringify(localTask));
                setItem({item: '', status: false});
                
            }else{
                Swal.fire({
                    title: 'Oops...',
                    text: 'Please enter a task!'
                  })
            }
    }
    const completeTask = (index) => {
        if(localTask[index]['status'] !== true){
            localTask[index]['status'] = true;
        } else{
            localTask[index]['status'] = false;
        }
        localStorage.setItem('localTask', JSON.stringify(localTask));
            setTaskList(localTask);
    }
    const deleteTask = (index) =>{
        localTask.splice(index, 1);
        localStorage.setItem('localTask', JSON.stringify(localTask));
        setTaskList(localTask);
    }
  return (
    <div className='component'>
        <form action="" className='todo'>
            <h4>My task for the day</h4>
            <input type="date" name='date' ref={refDate}  defaultValue={date} min={date}/>
            <input type="text" id="item" placeholder="Keep it short" variant="standard"  name='item' onChange={onChange} className="inputs" value={item.item}/>
            <button type='submit' onClick={addTask} name='addTask' className="buttonAdd">ADD</button>  
        </form>
        <DisplayTask taskList={taskList} completeTask={completeTask} deleteTask={deleteTask}/>
    </div>
      
  )
}

export default CreateTask