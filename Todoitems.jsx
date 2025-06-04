
/*import { useContext } from "react";*/
import TodoItem from "./TodoItem";
/*import { todoItemsContext } from "../store/DataStore";*/

function Todoitems ({todoitems , onDeleteClick}){

   /* const {todoItems} = useContext(todoItemsContext);*/
    return(
        <div>
            {todoitems.map((item) => (
                <TodoItem key={item.item} todoName={item.item} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />
            ))}
        </div>
    );
}

export default Todoitems;