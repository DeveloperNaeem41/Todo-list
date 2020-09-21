import React, { useState } from'react';
import LiCom from './LiCom';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const ToDo=() =>{

const [item, setItem]=useState("");
const [list,setList] =useState([]);
const inputEvent=(event)=>{

    setItem(event.target.value);
};

const storeValue =()=>{
    setList((preValue)=>{
        return [...preValue,item];
    })
setItem('');
};



return (
 
    <React.Fragment>
     <div className="main_div">
         <div className="center_div">
        
        <h1> ToDo List App</h1>
        <input type='text' placeholder='Add a item' onChange={inputEvent} value={item} />
        <Button onClick={storeValue}> <AddIcon /> </Button>
        <br />
        <ol>
            {
                list.map((value,index)=>{
                    return <LiCom key={index} text={value} />
                })
            }
        </ol>
        <br />




         </div>
     </div>





    </React.Fragment>
    
);




}
export default ToDo;