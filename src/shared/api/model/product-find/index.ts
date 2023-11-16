import { http } from "shared/api"
import type { GetProductsListParams } from "./type"

const LIMIT = 15;

const routesConfig = http.createRoutesConfig({
    getItems: http.createRoute<void>({
        url: "products",
        params: {
            offset: 0,
            limit: LIMIT
        }
    })
})

export const commonApi = routesConfig.build();