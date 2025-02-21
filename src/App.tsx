import { Route, Routes } from 'react-router-dom'
import './App.css'
import Initial from './pages/initial/Initial.tsx'
import Login from './pages/login/Login.tsx'
import Cadastro from './pages/register/Cadastro.tsx'

function App() {
  
  return ( 
    <div className='min-h-[73.5vh]'>
        <Routes>
          <Route path='/' element={<Initial />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Cadastro />} />
        </Routes>
    </div>
  )
}

export default App
