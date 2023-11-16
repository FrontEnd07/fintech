import { homeModel } from "pages/home/model";
import { useStore } from "effector-react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Title } from "shared/ui";

export const Items = () => {
    const data = useStore(homeModel.$items);
    console.log(data)
    return <section className={styles.main}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.top}>
                <Title className={styles.title}>
                    Всего продуктов:
                </Title>
            </div>
            <div className={styles.grid}>
    
            </div>
        </div>
    </section>

}