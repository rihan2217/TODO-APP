
function TodoItem2(){

    let item = "video";
    let date = "22/12/2006";
    return (
    <div className="container ">
      <div className="row ">
        <div className="col-4">
          {item}
        </div>
        <div className="col-3">
            {date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
    )
}

export default TodoItem2