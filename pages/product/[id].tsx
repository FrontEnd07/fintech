import { productModel } from "pages/product";
import { createGSSP } from "pages/shared";

export const getServerSideProps = createGSSP({
    pageEvent: productModel.pageStarter
})

export { Product as default } from "pages/product"