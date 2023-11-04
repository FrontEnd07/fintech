import clsx from "clsx"
import { Icon } from "shared/ui/icon"
import { Input } from "shared/ui/input"
import styles from "./styles.module.scss"
import { Button } from "shared/ui/button"

export const SearchBar = () => {
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
            Filter
        </div>
    </div>
}