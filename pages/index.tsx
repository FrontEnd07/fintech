import { homeModel } from "pages/home"
import { createGSSP } from "pages/shared"

export const getServerSideProps = createGSSP({
    pageEvent: homeModel.pageStarted,
})

export { HomePage as default } from "pages/home"