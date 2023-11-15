import { createGSP } from 'pages/shared'
import { pageModel } from 'widgets/catalog'

export const getStaticProps = createGSP({
    pageEvent: pageModel.pageStarted
})

export { HomePage as default } from "pages/home"