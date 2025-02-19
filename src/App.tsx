import { Route, Routes } from 'react-router-dom'
import './App.css'
import Initial from './pages/initial/Initial.tsx'

function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Initial />} />
        </Routes> ,
    </>
  )
}

export default App
