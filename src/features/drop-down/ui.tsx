import clsx from "clsx";
import { Icon } from "shared/ui/icon";
import styles from "./styles.module.scss";
import type { SelectOption } from "./types";
import { ReactNode, useState, useRef } from "react";
import { useOnClickOutside } from "shared/lib/use-on-click-outside";
interface DropDownProps {
    options: SelectOption[];
    value: string | string[] | undefined;
    placement?: 'bottom-start' | 'bottom-end';
    label: string;
    className?: string;
    startIcon?: ReactNode;
    onSelect: (option: SelectOption) => void;
}

export const DropDown = (
    {
        className,
        options,
        onSelect,
        value,
        placement = 'bottom-start',
        startIcon,
        label
    }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const select = options.find(option => option?.value === value) ?? options[0];
    const selectRef = useRef<HTMLDivElement>(null);

    const handlerClose = () => setIsOpen(prev => !prev)

    useOnClickOutside(selectRef, handlerClose)

    const handlerSelect = (option: SelectOption) => {
        onSelect(option);
        handlerClose();
    }

    return <div className={clsx(styles.main, isOpen && styles.isOpen, className)} ref={selectRef}>
        <div onClick={() => setIsOpen(prev => !prev)} className={clsx(styles.button)}>
            {startIcon && <span className={styles.icon}>{startIcon}</span>}
            <span className={clsx(styles.value)}>{select.value ? select.label : label}</span>
            <span className={clsx(styles.arrow)}>
                <Icon type="common" name="chevron" />
            </span>
        </div>
        <div></div>
    </div>
}