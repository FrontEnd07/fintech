import { filtersModel } from "features/search-bar/model"
import { useEvent, useStore } from "effector-react"
import { Input, Button, Icon } from "shared/ui"
import { DropDown } from "features/drop-down"
import styles from "./styles.module.scss"
import { useRouter } from "next/router"
import clsx from "clsx"


export const SearchBar = () => {
    const { query } = useRouter()
    const optionSelected = useEvent(filtersModel.optionSelected);
    const pending = useStore(filtersModel.$pending);
    const category = useStore(filtersModel.$category)
    

    return <div className={clsx(styles.main)}>
        <div className={clsx(styles.search_bar)}>
            <Input className={clsx(styles.input)} placeholder="Одежда, Электроника, Другое" />

            <Icon type="common" name="search" className={styles.icon} />

            <Button className={styles.button} skeletonLoading={false}>Поиск</Button>
        </div>
        <div className={clsx(styles.serach_filter)}>
            <DropDown
                onSelect={(option) => optionSelected({ categoryId: option.value })}
                startIcon={<Icon type="common" name='filters' />}
                skeletonLoading={pending}
                value={query.categoryId}
                label={"Категория"}
                options={category} />
        </div>
    </div>
}