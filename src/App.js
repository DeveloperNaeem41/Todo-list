import React, { useState } from 'react';

const App =()=>{

  const [item,newItem] =useState();
  const [items,itemList] = useState([]);
  const itemEvent = (event) =>{
console.log (event.target.value);
newItem(event.target.value);
  }
  const storeValue= () => {

    itemList ((oldValue)=>{
      return [...oldValue,item]
    });
    newItem('');
  };

return(
  <>
  <div className="main_div">
  <div className="center_div"> 
<h1>ToDo List</h1>
<br />
<input type ="text" placeholder="Add the items" onChange={itemEvent}
value={item} />
<button onClick={storeValue}> + </button>
<br />
<ul>
{
 items.map((itemNumber)=>{
   return (
   <div className="list">
   <li class="fas fa-window-close" > {itemNumber}</li>
   </div>
   );
 }) }

</ul>
</div>
</div>
</>
)
}

export default App;