import styles from "./styles.module.scss";
import clsx from "clsx";

export const Header = () => {
    return <header className={clsx(styles.main)}>
        <div className={clsx('container', styles.container)}>
            test
        </div>
    </header>
}