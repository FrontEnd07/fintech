import { HomePage } from "pages/home";
import { createGIT } from "pages/shared";
import { homeModel } from "pages/home";

HomePage.getInitialProps = createGIT({
    pageEvent: homeModel.pageStarted
})

export default HomePage