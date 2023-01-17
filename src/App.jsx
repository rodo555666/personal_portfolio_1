import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import YoPersonal from './partes/YoPersonal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <YoPersonal/>
    </div>
  )
}

export default App
