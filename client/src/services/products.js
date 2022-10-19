import axios from 'axios'

export const productsRequest = axios.create({
    baseURL: "http://localhost:3001/products"
})

 