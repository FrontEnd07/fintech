import styles from './styles.module.scss';
import clsx from 'clsx';
import { Title } from 'shared/ui';
import { useEvent, useStore } from 'effector-react';
import { filtersModel } from 'features/search-bar/model';
import { catalogModel } from '../model';
import { useEffect } from 'react';

interface CatalogProps {
    title: string;
}

export const Catalog = ({ title }: CatalogProps) => {

    const params = useStore(filtersModel.$params)
    const data = useStore(catalogModel.$catalog)

    useEffect(() => {

    }, [])

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