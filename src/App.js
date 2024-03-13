import { useState } from 'react';
import './App.css';
import TodoListItem from './TodoListItem';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';

var count = 1

function App() 

{
  const [editingFlag, setEditingFlag] = useState(-1)
  const [selectedFilter, setSelectedFilter] = useState("incomplete")
  var [todo, setTodo] = useState([
    {
      id:count++,
      title:"Todo1",
      completed:false
    },
    {
      id:count++,
      title:"Todo2",
      completed:true
    },
    {
      id:count++,
      title:"Todo3",
      completed:false
    }
  ])
  
  const addTodo = () =>
  {
    console.log("Add Todo")
    const todoText = document.getElementById("todoInput").value
    let todoObject = 
    {
      id: count++,
      title: todoText,
      completed : false
    }
    console.log("TodoInput: "+todoText)
    todo.push(todoObject)
    console.log("Length of Todo",todo.length)
    setTodo([...todo])
  }

    const deleteTodo = (id) =>
      {
        console.log("Delete todo id:", id)
        todo = todo.filter(tempTodo =>
          {
            if(id === tempTodo.id)
            {
              return false
            }
            else
            {
              return true
            }
          })
          setTodo([...todo])
      }

  // const getDynamicList = () =>
  // {
  //     let response = ""
  //     for(let count1=0; count1<todo.length; count1++)
  //     {
  //       response +=  <div>{todo[count1]}</div>
        
  //     }
  //     return response
  // }
  
const checkedChange = (id) =>
{
  console.log("checkChange id:", id)
  todo = todo.map(tempTodo =>
    {
      if(id === tempTodo.id)
      {
        // update completed todo
        tempTodo.completed = ! tempTodo.completed
      }
      return tempTodo
    })
    setTodo([...todo])
}


const editTodo = (id) =>
{
  console.log("Edit Todo")
  setEditingFlag(id)
}

const saveEditingtodo = (id) =>
{
  console.log("Save Editedtodo")
  let updateTodotext = document.getElementById("editingTodo").value
  todo = todo.map(tempTodo=>
    {
      if(tempTodo.id === id)
      {
        tempTodo.title = updateTodotext
      }
      return tempTodo
    }
    )
    setTodo([...todo])
    setEditingFlag(-1)
}

// const divStyle =
// {
//   backgroundColor : "#A7F24E",
//   margin : "10px",
//   padding : "10px"
// };
const handleFilter = (filterType) =>
{
  // console.log("filter clicked",filterType)
  switch(filterType)
  {
    case "incomplete":
      console.log("Incomplete Excuted")
      setSelectedFilter("incomplete")
      break;
    case "completed":
        console.log("Completed Excuted")
        setSelectedFilter("completed")
      break;
    case "all":
      console.log("all Excuted")
      setSelectedFilter("all")
      break;
    default:    
  }
}
  
return (
    // <div style={divStyle}>
    <div>
      <hl className='header'>Todo App</hl><br/>
      <label onClick={()=> handleFilter("incomplete")}>Incomplete</label> | 
      <label onClick={()=>handleFilter("completed")}>Completed</label> | 
      <label onClick={()=>handleFilter("all")}>All</label>
      <br/>
      <input id="todoInput" type='text' placeholder='Add your todo here..'/>
      <button onClick={addTodo}>Add</button><br/>
    {
      todo.map(tempTodo =>
      {
        switch(selectedFilter)
        {
          case "incomplete":
            if(!tempTodo.completed)
        {
            return <TodoListItem
                tempTodo={tempTodo}
                editingFlag={editingFlag}
                deleteTodo={deleteTodo}
                checkedChange={checkedChange}
                editTodo={editTodo}
                saveEditingtodo={saveEditingtodo}
                />
        }
        break;

        case "completed":
          if(tempTodo.completed)
          {
            return <TodoListItem
                tempTodo={tempTodo}
                editingFlag={editingFlag}
                deleteTodo={deleteTodo}
                checkedChange={checkedChange}
                editTodo={editTodo}
                saveEditingtodo={saveEditingtodo}
                />
          }
          break;

        case "all" :
            return <TodoListItem
                tempTodo={tempTodo}
                editingFlag={editingFlag}
                deleteTodo={deleteTodo}
                checkedChange={checkedChange}
                editTodo={editTodo}
                saveEditingtodo={saveEditingtodo}
                />
            break;
        default:  
      } 
         
      })}

       {/* {getDynamicList()} */}

    </div>
  );
}
        //    editingFlag={editingFlag}
        // deleteTodo={deleteTodo}
        // checkedChange={checkedChange}
        // editTodo={editTodo}
        // saveEditingtodo={saveEditingtodo}
        // tempTodo={tempTodo}
export default App;
