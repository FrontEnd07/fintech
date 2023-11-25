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
    id: number;
    name: string;
    image?: string;
    updateAt?: string;
    creationAt?: string;
}

export interface ProductItems {
    images: string[] | undefined;
    category: ProductCategory;
    title: string;
    price: string;
    id: number;
}

export type GetProductsListParams = {
    limit?: number;
    offset?: number;
    title?: string | null;
    cetegoryId?: string | null;
}