import { useState } from 'react'
import Home from './pages/Home'
import Navigation from './navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navigation />
  )
}
// hello
export default App
