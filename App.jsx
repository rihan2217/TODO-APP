import AppName from "./comp/AppName";
import AppBox from "./comp/AppBox";
import Todoitems from "./comp/Todoitems";
import WelcomeMessage from "./comp/WelcomeMessage";
import "./App.css";
import { useState } from "react";
/*import todoItemsContextProvider from "./store/DataStore";*/

function App() {
  const [todoItems,setTodo] = useState([])

  const handleNewItem =(itemName,itemDate)=>{
    setTodo((curvalue)=>[
      ...curvalue,{
        item: itemName,
        dueDate:itemDate
      }
    ])
  }

  const handleDelete = (todoItemName)=>{
    const newTodoItem=todoItems.filter((item)=>item.item !==todoItemName);
    setTodo(newTodoItem);
  }

  return (
   /* <todoItemsContextProvider>*/
      <div className="todo-container" style={{ textAlign: "center" }}>
        <AppName />
        <div className="item-container">
          <AppBox onNewItem={handleNewItem}/>
          <Todoitems todoitems={todoItems} onDeleteClick={handleDelete} ></Todoitems>
        </div>
        { todoItems.length ===0 && <WelcomeMessage ></WelcomeMessage>}
      </div>
    /*</todoItemsContextProvider>*/
  );
}

export default App;
