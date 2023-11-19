import { filtersModel } from "features/search-bar/model";
import { ProductItem } from "entities/product/item";
import { homeModel } from "pages/home/model";
import { useStore } from "effector-react";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import clsx from "clsx";

export const Items = () => {
    const data = useStore(homeModel.$items);
    const params = useStore(filtersModel.$params);

    return <section className={styles.main}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.top}>
                <Title className={styles.title}>
                    Всего продуктов:
                </Title>
            </div>
            <div className={styles.grid}>
                {data?.map((item) => <ProductItem key={item.id} item={item} />) ?? <div>Loading...</div>}
            </div>
        </div>
    </section>

}