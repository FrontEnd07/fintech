import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Logo = () => {
    return <Link href='/' className={clsx(styles.main)}>
        <span>Fin</span>
        <span>Tech</span>
    </Link>
}