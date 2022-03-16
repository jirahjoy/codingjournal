import React, {useState, useRef} from 'react';
import DisplayThoughts from './DisplayThoughts';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Swal from 'sweetalert2';



const CreateThoughts = () => {

    let curr = new Date();
    // curr.setDate(curr.getDate() + 1);
    let date = curr.toISOString().substr(0,10);
    
    const refDate2 = useRef(date);
    const [item2, setItem2] = useState({date: '', item: '', status: false});
    const [taskList2, setTaskList2] = useState([]);
    let localThoughts = localStorage.getItem('localThoughts') ? JSON.parse(localStorage.getItem('localThoughts')) : [];

    const onChange = (e) =>{
        let {value} = e.target;
        let obj = {};
        obj['item'] = value;
        obj['status'] = false;
        obj['date'] = refDate2.current.value;
        setItem2(obj);
    }
    const addTask = (e) =>{
        const {name} = e.target;
        
            if(item2.item !== '' && item2.date !== ''){
                localThoughts.unshift(item2);
                localStorage.setItem('localThoughts', JSON.stringify(localThoughts));
                setItem2({item: '', status: false});
                
            }else{
                Swal.fire({
                    title: 'Oops...',
                    text: 'Please enter a task!',
                    
                  })
            }
    }
    const completeTask = (index) => {
        if(localThoughts[index]['status'] !== true){
            localThoughts[index]['status'] = true;
        } else{
            localThoughts[index]['status'] = false;
        }
        localStorage.setItem('localThoughts', JSON.stringify(localThoughts));
            setTaskList2(localThoughts);
    }
    const deleteTask = (index) =>{
        localThoughts.splice(index, 1);
        localStorage.setItem('localThoughts', JSON.stringify(localThoughts));
        setTaskList2(localThoughts);
    }
  return (
    <div className='component'>
    <form action="" className='todo'>
        <h4>My thoughts for the day</h4>
        <input type="date" name='date' ref={refDate2} defaultValue={date} min={date}/>
        <input type="text" id="item" placeholder="Keep it short" variant="standard"  name='item' onChange={onChange} className="inputs" value={item2.item}/>
        <button type='submit' onClick={addTask} name='addTask' className="buttonAdd">ADD</button>  
    </form>
    <DisplayThoughts taskList2={taskList2} completeTask={completeTask} deleteTask={deleteTask}/>
</div>
  )
}

export default CreateThoughts