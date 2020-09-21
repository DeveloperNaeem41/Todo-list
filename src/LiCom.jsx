import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


const LiCom =(props)=>{
  
  const [line,setLine] = useState(false);
    const cutIt= () => {

        setLine (true);




  }

    return (
        <>
        <div className="styling">
    <span onClick={cutIt}>
    <DeleteIcon className="delete" />
</span>
    <li  style={{textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
    </div>
    </>
    );
}
export default LiCom;