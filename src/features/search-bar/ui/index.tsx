import clsx from "clsx"
import { Icon } from "shared/ui/icon"
import { Input } from "shared/ui/input"
import styles from "./styles.module.scss"
import { Button } from "shared/ui/button"
import { DropDown } from "features/drop-down"
import { generes } from "../config"
import { SelectOption } from "../types"

export const SearchBar = () => {

    const handlerSelect = (event: SelectOption) => {
        console.log(event)
    }

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
                value={undefined}
                label={"Категория"}
                onSelect={(option) => handlerSelect(option)}
            />
        </div>
    </div>
}