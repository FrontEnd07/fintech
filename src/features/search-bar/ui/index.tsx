import clsx from "clsx"
import { generes } from "../config"
import { filtersModel } from "../model"
import { useRouter } from "next/router"
import styles from "./styles.module.scss"
import { useEvent } from "effector-react"
import { DropDown } from "features/drop-down"
import { Input, Button, Icon } from "shared/ui"
import { useEffect } from "react"

export const SearchBar = () => {
    const { query } = useRouter()
    const optionSelected = useEvent(filtersModel.optionSelected);

    return <div className={clsx(styles.main)}>
        <div className={clsx(styles.search_bar)}>
            <Input
                className={clsx(styles.input)}
                placeholder="Одежда, Электроника, Другое"
            />
            <Icon type="common" name="search" className={styles.icon} />
            <Button className={styles.button} skeletonLoading={false}>Поиск</Button>
        </div>
        <div className={clsx(styles.serach_filter)}>
            <DropDown
                options={generes}
                value={query.category}
                startIcon={<Icon type="common" name='filters' />}
                label={"Категория"}
                onSelect={(option) => optionSelected({ category: option.value })}
            />
        </div>
    </div>
}