import styles from './styles.module.scss';
import { Title } from 'shared/ui';
import clsx from 'clsx';

interface CatalogProps {
    title: string;
}

export const Catalog = ({ title }: CatalogProps) => {
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