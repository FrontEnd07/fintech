import clsx from 'clsx';
import { useEffect } from 'react';
import { Title } from 'shared/ui';
import { catalogModel } from '../model';
import styles from './styles.module.scss';
import { useStore } from 'effector-react';
import { filtersModel } from 'features/search-bar/model';

interface CatalogProps {
    title: string;
}

export const Catalog = ({ title }: CatalogProps) => {

    const params = useStore(filtersModel.$params)
    const data = useStore(catalogModel.$catalog)
    console.log(data)


    return <section className={styles.main}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.top}>
                <Title className={styles.title}>
                    {title}
                </Title>
            </div>
            <div className={styles.grid}>

            </div>
        </div>
    </section>
}