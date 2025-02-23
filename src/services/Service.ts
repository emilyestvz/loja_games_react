import axios from "axios";

const api = axios.create({
    baseURL: 'https://lojagames-nest.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Método Post para Usuários  - Cadastrar
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

// Metódo Get para Usuários
export const buscarUsuario = async (url: string, setDados: Function, dados: Object) => {
    const resposta = await api.get( url, dados )
    setDados(resposta.data)
}

// Método Post para Login
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Metódos para Categorias
export const listar = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }

  export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
  export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
  }

  export const deletar = async(url: string) => {
    await api.delete(url)
  }

// Metódos para Produtos
  export const listarProdutos = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }

  export const cadastrarProduto = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }