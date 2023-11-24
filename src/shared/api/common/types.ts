export interface Data<T> {
    docs: T[];
    /** Общее количество результатов **/
    tatal: number;
    /** Количество результатов на странице **/
    limit: number;
    /** Текущая страница **/
    page: number;
    /** Сколько страниц всего **/
    pages: number;
}

export interface ProductCategory {
    name: string;
    creationAt?: string;
    id: number;
    image?: string;
    updateAt?: string;
}

export interface ProductItems {
    category: ProductCategory;
    images: string[] | undefined;
    title: string;
    price: string;
    id: number;
}

export type GetProductsListParams = {
    offset?: number;
    limit?: number;
    title?: string | null;
    cetegoryId?: string | null;
}