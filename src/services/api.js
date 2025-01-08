import axios from "axios"; //biblioetca para conectar ao banco de daddos //


export const api = axios.create({
    baseURL:"http://localhost:3001"       //para conecta ao meu banco de dados//
});

api.interceptors.request.use((config)=>{
const userData = localStorage.getItem("devburguer: useData")

const token = userData && JSON.parse(userData).token


config.headers.authorization = `Bearer ${token}`

return config



})





//