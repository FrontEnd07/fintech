import { PropsWithChildren } from "react"
import { Header } from "widgets/header"

export const BaseLayout = ({ children }: PropsWithChildren) => {
    return <>
        <Header />
        <div className="main">Test</div>
    </>
}