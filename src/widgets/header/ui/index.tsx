import clsx from "clsx";
import { Logo } from "./logo"
import styles from "./styles.module.scss";
import { SearchBar } from "features/search-bar";

export const Header = () => {
    return <header className={clsx(styles.main)}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.row}>
                <Logo />
            </div>
            <div className={clsx(styles.row)}>
                <SearchBar />
            </div>
        </div>
    </header>
}