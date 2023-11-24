import { useOnClickOutside } from "shared/lib/use-on-click-outside";
import { ReactNode, useState, useRef } from "react";
import type { SelectOption } from "./types";
import styles from "./styles.module.scss";
import { Icon } from "shared/ui/icon";
import clsx from "clsx";

interface DropDownProps {
    onSelect: (option: SelectOption) => void;
    placement?: 'bottom-start' | 'bottom-end';
    value: String | string[] | undefined;
    skeletonLoading?: Boolean;
    options: SelectOption[];
    startIcon?: ReactNode;
    className?: string;
    label: string;
}

export const DropDown = (
    {
        placement = 'bottom-start',
        skeletonLoading,
        startIcon,
        className,
        onSelect,
        options,
        value,
        label
    }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selected = options.find(option => option?.value === value) ?? options[0];
    const selectRef = useRef<HTMLDivElement>(null);

    const handlerClose = () => setIsOpen(false)

    useOnClickOutside(selectRef, handlerClose)

    const handlerSelect = (option: SelectOption) => {
        onSelect(option);
        handlerClose();
    }

    return <div className={clsx(
        className,
        styles.main,
        { [styles.isOpen]: isOpen }
    )} ref={selectRef}>
        <div onClick={() => !skeletonLoading && setIsOpen(prev => !prev)} className={clsx(styles.button, { [styles.skeleton]: skeletonLoading })}>
            {startIcon && <span className={styles.icon}>{startIcon}</span>}

            <span className={clsx(styles.value)}>
                {selected.value ? selected.label : label}
            </span>

            <span className={clsx(styles.arrow)}>
                <Icon type="common" name="chevron" />
            </span>
        </div>
        <div className={clsx(styles.options, styles[placement])}>
            {options?.map((option) => {
                const isSelected = selected.value === option?.value;

                return <div
                    onClick={() => handlerSelect(option)}
                    key={option.label}
                    className={clsx(styles.option, isSelected && styles.isSelected)}>
                    {option?.label}
                    <span className={styles.check}>
                        <Icon type="common" name="check" />
                    </span>
                </div>
            })}
        </div>
    </div>
}