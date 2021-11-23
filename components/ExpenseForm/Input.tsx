
import React, { useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

interface InputProps {
    className?: string;
    label: string;
    onChange: (value: string) => void;
    value: string;
}

const Input: React.FC<InputProps> = ({ className, label, value, onChange }) => {
    const [isValid, setIsValid] = useState<boolean>(true);

    return (
        <div className={className}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                defaultValue={value}
                onChange={(ev) => {
                    onChange(ev.target.value);
                    setIsValid(!!ev.target.value);
                }}
                className={classNames(styles.input, { [styles.inputInvalid]: !isValid })}
            />
            {!isValid &&
                <span className={styles.warning}>This field is required</span>
            }
        </div>
    );
};

export default Input;



