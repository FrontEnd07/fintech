import { ProductCategory, ProductItems } from "./types";
import { http } from "./config"

const LIMIT = 15;

const routesConfig = http.createRoutesConfig({
    getItems: http.createRoute<void, ProductItems[]>({
        url: "products",
        params: {
            offset: 0,
            limit: LIMIT
        }
    }),
    getCategory: http.createRoute<void, ProductCategory[]>({
        url: "categories"
    })
})

export const commonApi = routesConfig.build();