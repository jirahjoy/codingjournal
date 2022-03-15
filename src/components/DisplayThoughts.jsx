import React from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateThoughts from './CreateThoughts';

const DisplayThoughts = (props) => {
    const {completeTask, deleteTask} = props;
    let taskList2 = props.taskList2.length > 0 ? props.taskList2 :  JSON.parse(localStorage.getItem('localThoughts'));
  return (
    <div >
     <ul style={{margin: '0', padding: '0', listStyle: 'none'}}>
            {taskList2 && taskList2.length > 0 ?
            taskList2.map((element, index) => 
                <li key={index}>
                <div className={element['status'] ? 'line-through' : 'null'}>{element.date} {element.item}</div>
                <div style={{display:'flex', justifyContent:'space-between', width:'50px'}}><CheckCircleOutlineOutlinedIcon className='doneBtn' onClick={()=>completeTask(index)} /> <DeleteOutlineOutlinedIcon className='delBtn' onClick={() => {deleteTask(index)}} /></div>
            </li> 
            ) : null
            }
        </ul> 
    </div>
  )
}

export default DisplayThoughts