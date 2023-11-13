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