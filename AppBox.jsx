/*import { useContext, useState } from "react";
import { todoItemsContext } from "../store/DataStore";
*/
import { useRef } from "react";

function AppBox({onNewItem}) {

  /*const {addNew} =useContext(todoItemsContext);*/
  
  const todoNameEle= useRef();
  const todoDateEle= useRef();

  const handleAddButton=(event)=>{
    event.preventDefault();
    const todoName=todoNameEle.current.value;
    const todoDate=todoDateEle.current.value;
    todoNameEle.current.value ="";
    todoDateEle.current.value="";
    onNewItem(todoName,todoDate);
  }


 /* const [todoName , setTodoName] = useState();
  const [todoDate , setTodoDate] = useState();

  const handleName = (event)=>{
    setTodoName(event.target.value);
  };

  const handleDate = (event)=>{
    setTodoDate(event.target.value);
  };

  const handleAdd = ()=>{
    addNew(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  };*/

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButton} >
        <div className="col-4">
          <input type="text" placeholder="enter todo here" ref={todoNameEle}/*value={todoName} onChange={handleName}*/></input>
        </div>
        <div className="col-3">
          <input type="date" ref={todoDateEle}/* value={todoDate} onChange={handleDate}*/></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success"  /*onClick={handleAdd}*/>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppBox;
