import styles from "./styles.module.scss"
import type { NextPage } from "next"
import clsx from "clsx"
import { useRouter } from "next/router"

export const Product: NextPage = () => {
    let { query } = useRouter();

    return <div className={clsx(styles.main)}>Product: {query.id}</div>
}