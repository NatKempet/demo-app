import { useState } from 'react'
import CMUHealthApp from './components/CMUHealthApp'
import './App.css'   // ✅ Correct import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CMUHealthApp />
    </>
  )
}

export default App
