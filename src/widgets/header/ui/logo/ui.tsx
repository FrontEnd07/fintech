import clsx from "clsx";
import styles from "./styles.module.scss";

export const Logo = () => {
    return <div className={clsx(styles.main)}>
        <span>Fin</span>
        <span>Tech</span>
    </div>
}