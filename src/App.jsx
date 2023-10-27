import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import configs from './config/configs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {console.log(configs.appwriteCollectionId)}
     <h1>Aman is Billionaire</h1>
    </>
  )
}

export default App
