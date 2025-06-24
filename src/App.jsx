import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [editText, setEditText] = useState("")

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleEditInput = (e) => {
    setEditText(e.target.value)
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

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditText(todos[index])
  }

  const handleSave = () => {
    if (editText.trim() !== "") {
      const newTodos = todos.map((todo, i) => i === editIndex ? editText : todo)
      setTodos(newTodos)
      setEditIndex(null)
    } else {
      alert("タスクを入力してください")
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
        {todos.map((todo, index) => (
          <li>
            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={handleEditInput}
                />
                <button onClick={handleSave}>保存</button>
              </>
            ) : (
              <>
                {todo}
                <div className='buttons'>
                  <button onClick={() => handleEdit(index)}>編集</button>
                  <button className='delete-button' onClick={() => handleDelete(index)}>削除</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
