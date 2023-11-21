import { Items } from "./items"
import { useEvent, useGate } from "effector-react"
import { homeModel } from "pages/home"
import { NextPage } from "next"

export const HomePage: NextPage = () => {
    return <>
        <Items />
    </>
}