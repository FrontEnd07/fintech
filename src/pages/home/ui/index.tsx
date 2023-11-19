import { Items } from "./items"
import { useGate } from "effector-react"
import { homeModel } from "pages/home/model"

export const HomePage = () => {
    useGate(homeModel.HomePageGate)

    return <>
        <Items />
    </>
}