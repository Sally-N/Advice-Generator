import { useState } from 'react'
import './index.css'
import './App.css'
import AdviceGenerator from './Advice'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#1f2632] p-0 m-0 w-screen h-screen">
      <AdviceGenerator />

    </div>
  )
}

export default App
