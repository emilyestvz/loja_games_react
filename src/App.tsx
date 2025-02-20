import { Route, Routes } from 'react-router-dom'
import './App.css'
import Initial from './pages/initial/Initial.tsx'

function App() {
  
  return ( 
    <div className='min-h-[73.5vh]'>
        <Routes>
          <Route path='/' element={<Initial />} />
        </Routes>
    </div>
  )
}

export default App
