import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleAdd = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text])
    } else {
      alert("タスクを入力してください")
    }
    setText("")
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className='container'>
      <h1>Todoリスト</h1>
      <div className='input-area'>
        <input
          value={text}
          placeholder='やることを入力...'
          onChange={handleInput}
        />
        <button onClick={handleAdd}>追加</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <div className='buttons'>
              <button>編集</button>
              <button className='delete-button' onClick={() => handleDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
