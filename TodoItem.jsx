/*import { useContext } from "react";
import { todoItemsContext } from "../store/DataStore";*/


function TodoItem ({todoName , todoDate , onDeleteClick}){

  /*const {deleteNew} = useContext(todoItemsContext);*/

    return(
        <div className="container">
        <div className="row ">
          <div className="col-4">
            {todoName}
          </div>
          <div className="col-3">
              {todoDate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger "onClick={()=>onDeleteClick(todoName)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}

export default TodoItem