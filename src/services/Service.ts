import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Método Post para Usuários  - Cadastrar
export const cadastro = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.dados);
}

// Metódo Get para Usuários
export const buscar = async (url: string, setDados: Function, dados: Object) => {
    const resposta = await api.get( url, dados )
    setDados(resposta.dados)
}

// Método Post para Login
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.dados)
}