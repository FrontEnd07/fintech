type Id = number | undefined | null;

export const paths = {
    product: (id: Id): string => `/product/${id}`
}