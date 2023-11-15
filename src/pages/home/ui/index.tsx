import { catalogModel } from "widgets/catalog/model"
import { Catalog } from "widgets/catalog"
import { useGate } from "effector-react"

export const HomePage = () => {
    useGate(catalogModel.HomePageGate)

    return <>
        <Catalog title="Количество продуктов: " />
    </>
}