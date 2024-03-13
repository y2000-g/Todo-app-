import './TodoListItem.css';

const TodoListItem =(props)=>
{
  // console.log("props:"+props)
   return <div key={props.tempTodo.id}>
    { props.tempTodo.completed === true ? 
    <><input type='checkbox' onChange={()=> props.checkedChange(props.tempTodo.id)}checked/><s> {props.tempTodo.title}</s>
    </> :

    <><input type='checkbox' onChange={()=> props.checkedChange(props.tempTodo.id)}/>
    {
      props.editingFlag === props.tempTodo.id ?
      <><input type='text' id = 'editingTodo' defaultValue={props.tempTodo.title}/>
      <button onClick={() => props.saveEditingtodo(props.tempTodo.id)}>Save</button>
      <button onClick={ () => props.deleteTodo(props.tempTodo.id)}>Delete</button>
      </>
      :
      <>{props.tempTodo.title}
      <button onClick={()=>props.editTodo(props.tempTodo.id)}>Edit</button>
      <button onClick={ () => props.deleteTodo(props.tempTodo.id)}>Delete</button>
      </>
    }

    </>
  // {/* <input type= "checkbox" /> */}
}
  </div>
}

export default TodoListItem;