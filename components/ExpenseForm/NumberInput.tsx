import { useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

interface NumberInputProps {
    className?: string;
    label: string;
    onChange: (amount: number) => void;
    value: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ className, label, value, onChange }) => {
    const [isValid, setIsValid] = useState<boolean>(true);

    return (
        <div className={className}>
            <label className={styles.label}>{label}</label>
            <input
                type="number"
                min={0}
                value={value || ''}
                onChange={({ target }) => {
                    onChange(parseFloat(target.value));
                    setIsValid(parseFloat(target.value) > 0);
                }}
                className={classNames(styles.input, { [styles.inputInvalid]: !isValid })}
            />
            {!isValid &&
                <span className={styles.warning}>This field is required</span>
            }
        </div>
    );
};

export default NumberInput;