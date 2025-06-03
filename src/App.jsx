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
      setText("")
    }
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
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
