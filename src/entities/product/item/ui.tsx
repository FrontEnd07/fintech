import { ProductItems } from "shared/api/types";
import styles from "./styles.module.scss";
import { paths } from "shared/routing";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface ProductItemProps {
    item: Partial<ProductItems>;
}

export const ProductItem = ({ item }: ProductItemProps) => {

    return <Link
        className={styles.main}
        href={paths.product(item?.id)}>
        <div className={clsx(styles.root)}>
            <div className={clsx(styles.card_image)}>
                <Image
                    fill
                    className={clsx(styles.image)}
                    src={item?.images?.[0] ?? ''}
                    alt={item?.title ?? ""}
                    sizes="100%"
                />
            </div>
            <div className={clsx(styles.card_content)}>
                <div className={styles.details}>
                    <div>
                        <span>{item?.title}</span>
                    </div>
                    <div>
                        <span>{item?.category?.name}</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <span>{item?.price} $</span>
                </div>
            </div>
        </div>
    </Link>
}