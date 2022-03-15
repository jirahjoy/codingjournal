import React from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateTask from './CreateTask';

const DisplayTask = (props) => {
    const {completeTask, deleteTask} = props;
    let taskList = props.taskList.length > 0 ? props.taskList :  JSON.parse(localStorage.getItem('localTask'));
  return (
    // style={{maxHeight:'210px', overflowY:'auto'}}
    <div >
        <ul style={{margin: '0', padding: '0', listStyle: 'none'}}>
            {taskList && taskList.length > 0 ?
            taskList.map((element, index) => 
                <li key={index}>
                <div className={element['status'] ? 'line-through' : 'null'}>{element.date} : {element.item}</div>
                <div style={{display:'flex', justifyContent:'space-between', width:'50px'}}><CheckCircleOutlineOutlinedIcon className='doneBtn' onClick={()=>completeTask(index)} /> <DeleteOutlineOutlinedIcon className='delBtn' onClick={() => {deleteTask(index)}} /></div>
            </li> 
            ) : null
             }
        </ul> 
    </div>
  )
}

export default DisplayTask
