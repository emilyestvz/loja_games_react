import { Route, Routes } from 'react-router-dom'
import './App.css'
import Initial from './pages/initial/Initial.tsx'
import Login from './pages/login/Login.tsx'
import Cadastro from './pages/register/Cadastro.tsx'
import ListarCategorias from './components/categories/listCategory/ListCategory.tsx'
import FormCategoria from './components/categories/formCategory/FormCategory.tsx'
import DeletarCategoria from './components/categories/delCategory/DelCategory.tsx'

function App() {
  
  return ( 
    <>
        <div className='min-h-[vh]'>
        <Routes>
          <Route path='/' element={<Initial />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Cadastro />} />
          <Route path='/categorias' element={<ListarCategorias />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          {/* <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/cadastrarproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} /> */}
        </Routes>
        </div>
    </>
  )
}

export default App
