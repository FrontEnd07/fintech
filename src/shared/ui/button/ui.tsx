import clsx from "clsx"
import styles from "./styles.module.scss"
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    { children, classname, ...props }, ref) => {
    return <button>{children}</button>
})