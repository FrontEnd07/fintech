import { http } from "shared/api"
import type { GetProductsListParams } from "./type"

const LIMIT = 15;

const routesConfig = http.createRoutesConfig({
    getCatalog: http.createRoute<GetProductsListParams>(
        ({ offset, limit, title, cetegoryId }) => ({
            url: 'products',
            params: {
                offset: 0,
                limit: LIMIT,
                title,
                cetegoryId
            }
        })
    )
})

export const commonApi = routesConfig.build();