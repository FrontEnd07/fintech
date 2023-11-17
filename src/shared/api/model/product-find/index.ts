import { http } from "shared/api"
import { ProductItems, Data } from "shared/api/types";
import type { GetProductsListParams } from "./type"

const LIMIT = 15;

const routesConfig = http.createRoutesConfig({
    getItems: http.createRoute<void, ProductItems[]>({
        url: "products",
        params: {
            offset: 0,
            limit: LIMIT
        }
    })
})

export const commonApi = routesConfig.build();