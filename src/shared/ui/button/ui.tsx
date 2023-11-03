import clsx from "clsx"
import styles from "./styles.module.scss"
import { Spinner } from "shared/ui/spinner";
import { forwardRef, type ElementType, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps<E extends ElementType = ElementType> extends ButtonHTMLAttributes<HTMLButtonElement> {
    classname?: string;
    loading?: boolean;
    href?: string;
    skeletonLoading?: boolean;
    rounded?: boolean;
    gradient?: boolean;
    size?: 'small' | 'regular' | 'meium' | 'big' | 'large';
    variant?: 'primary' | 'white' | 'gray' | 'glass';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    as?: E;
}

const DEFAULT_ELEMENT: ElementType = 'button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            as,
            gradient,
            rounded,
            loading,
            endIcon,
            children,
            classname,
            startIcon,
            className,
            skeletonLoading,
            size = "regular",
            variant = 'primary',
            ...props
        }, ref
    ) => {

        const ButtonSpinner = <div className={styles.spinner}>
            <Spinner strokeWidth={4} />
        </div>

        const Element = as || DEFAULT_ELEMENT;

        return <Element
            ref={ref}
            className={clsx(
                'btn-reset',
                styles.btn,
                {
                    [styles.founded]: rounded,
                    [styles.skeleton]: skeletonLoading,
                    [styles.gradient]: gradient
                },
                styles[variant],
                styles[size],
                className,
            )}
        >
        </Element>
    })