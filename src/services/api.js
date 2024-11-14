import axios from "axios"; //biblioetca para conectar ao banco de daddos //


export const api = axios.create({
    baseURL:"http://localhost:3001"       //para conecta ao meu banco de dados//
});

api.interceptors.request.use((config)=>{
const token = localStorage.getItem("token")


config.headers.authorization = `Bearer ${token}`

return config



})





//