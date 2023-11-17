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
}

export interface ProductItems {
    category: ProductCategory;
    images: string[] | undefined;
    title: string;
    price: string;
    id: number;
}