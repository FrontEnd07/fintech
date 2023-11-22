import { useGate } from "effector-react"
import { homeModel } from "pages/home"
import { NextPage } from "next"
import { Items } from "./items"

export const HomePage: NextPage = () => {
    useGate(homeModel.HomePageGate)

    return <>
        <Items />
    </>
}