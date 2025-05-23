import './App.css'

function App() {
  return (
    <div className='container'>
      <h1>Todoリスト</h1>
      <div className='input-area'>
        <input
          placeholder='やることを入力...'
        />
        <button>追加</button>
      </div>
      <ul>
        <li>プログラミング演習1課題</li>
        <li>基礎ゼミ</li>
        <li>Paiza演習問題</li>
      </ul>
    </div>
  )
}

export default App
