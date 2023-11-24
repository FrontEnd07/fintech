import clsx from "clsx"
import { generes } from "../config"
import { filtersModel } from "../model"
import { useRouter } from "next/router"
import styles from "./styles.module.scss"
import { useEvent, useStore } from "effector-react"
import { DropDown } from "features/drop-down"
import { Input, Button, Icon } from "shared/ui"


export const SearchBar = () => {
    const { query } = useRouter()
    const optionSelected = useEvent(filtersModel.optionSelected);
    const pending = useStore(filtersModel.$pending);
    const category = useStore(filtersModel.$category)
    console.log(category)

    return <div className={clsx(styles.main)}>
        <div className={clsx(styles.search_bar)}>
            <Input className={clsx(styles.input)} placeholder="Одежда, Электроника, Другое" />

            <Icon type="common" name="search" className={styles.icon} />

            <Button className={styles.button} skeletonLoading={false}>Поиск</Button>
        </div>
        <div className={clsx(styles.serach_filter)}>
            <DropDown
                onSelect={(option) => optionSelected({ category: option.value })}
                startIcon={<Icon type="common" name='filters' />}
                value={query.category}
                label={"Категория"}
                options={generes} />
        </div>
    </div>
}