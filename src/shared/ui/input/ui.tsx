import clsx from "clsx";
import styles from "./styles.module.scss";
import { forwardRef, InputHTMLAttributes, useState } from "react"
import { Icon } from "shared/ui/icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: string;
    hasError?: boolean;
    onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, hasError, type = "text", placeholder, onClear, value, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handlerOnBlur = () => {
        if (value === "") {
            setIsFocus(false)
        }
    }

    return <div className={clsx(styles.main, className)}>
        <input
            ref={ref}
            onFocus={() => setIsFocus(true)}
            onBlur={handlerOnBlur}
            placeholder={placeholder}
            type={type}
            className={
                clsx(
                    'input-reset',
                    {
                        [styles.isFocus]: isFocus,
                        [styles.clear]: onClear,
                    },
                    styles.input,
                    styles[type])
            }
            value={value}
        />
        {onClear && <button
            type="button"
            onClick={onClear}
            className={clsx(
                "btn-reset",
                { [styles.visibile]: value },
                styles.clearBtn
            )}>
            <Icon type="common" name="close" />
        </button>}
    </div>
})