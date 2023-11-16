import styles from "./styles.module.scss";
import { paths } from "shared/routing";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface ProductItemProps {
    items: {
        images: string;
        category: {
            name: string;
        };
        title: string;
        price: number;
        id: number;
    };
}

export const ProductItem = ({ items }: ProductItemProps) => {
    return <Link href={paths.product(items?.id)}>
        <div>
            <div>
                <Image
                    fill
                    className={clsx(styles.image)}
                    src={`${items?.images[0]}`}
                    alt={items?.title ?? ""}
                    sizes="100%"
                />
            </div>
            <div className={clsx(styles.content)}>
                <div>
                    <div>
                        <span>{items?.title}</span>
                    </div>
                    <div>
                        <span>{items?.category?.name}</span>
                    </div>
                </div>
                <div>
                    <span>{items?.price}</span>
                </div>
            </div>
        </div>
    </Link>
}