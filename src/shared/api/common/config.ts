import axios from "axios"
import { createHttp } from "effector-http-api";

const BASE_URL = `https://api.escuelajs.co/api/v1/`;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

export const http = createHttp(instance)