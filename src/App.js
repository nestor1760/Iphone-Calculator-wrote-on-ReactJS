import React, { useState } from 'react';
import './styles.css';
import { TodoList } from './components/TodoList';
import { MyButton } from './UI/Button/MyButton';

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  //function that add new action
  function addNewAction (e) {
      e.preventDefault()
      const newItem = {
        id: Date.now(),
        title: value
      }
      setList([...list, newItem])
      setValue('')
  }

  //function that delete actions
  function deleteActions (todo) {
    const newArr = list.filter(i => i.id !== todo.id)
    setList(newArr)
  }

  return (
    <div className="App">
      <h1>TodoList App by Nestor</h1>
        <form>
          <input
            className='inputActions'
            type='text'
            placeholder='Write your action...' 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <MyButton onClick={addNewAction}>Add</MyButton>
        </form>
        {
          (list.length)
            ?
              <TodoList list={list} remove={deleteActions}/>
            :
              <h2 style={{margin: '40px 0'}}>Do you have plans for today?</h2>
        }
    </div>
  );
}

export default App;
