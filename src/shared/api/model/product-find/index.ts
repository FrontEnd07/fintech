import { http } from "shared/api/config"
import { GetProductsListParams } from "./type"

export const ProductFind = (params?: GetProductsListParams) => {
    try {
        return http.get(`products`, { params })
    } catch (e) {
        console.log(e)
    }
}