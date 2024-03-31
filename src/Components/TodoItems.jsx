import React from 'react'
import './css/TodoItems.css'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'
import coche from './assets/coche.png'

const TodoItems = ({no, text, display, setTodos}) => {
  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data);
  }

  const toggle =() =>{
    let data = JSON.parse(localStorage.getItem('todos'));
    for(let i=0; i<data.length; i++){
      if(data[i].no === no){
        if(data[i].display===""){
          data[i].display = 'line-through';
        }else{
          data[i].display = '';
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
    <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display==="" ?<img src={not_tick} alt="" className='not-tick'/> : <img src={coche} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img src={cross} alt="" onClick={() =>{deleteTodo(no)}} className='todoitems-cross-icon'/>
    </div>
  )
}

export default TodoItems
