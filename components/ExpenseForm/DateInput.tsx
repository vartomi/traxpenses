import moment, { Moment } from 'moment';
import { useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

interface DateInputProps {
    className?: string;
    label: string;
    onChange: (date: Moment) => void;
    value: Moment;
}

const DateInput: React.FC<DateInputProps> = ({ className, label, value, onChange }) => {
    const [isValid, setIsValid] = useState<boolean>(true);

    return (
        <div className={className}>
            <label className={styles.label}>
                {label}
            </label>
            <input
                type="date"
                min="1970-01-01"
                value={value.format('YYYY-MM-DD')}
                onChange={(ev) => {
                    onChange(moment(ev.target.value));
                    setIsValid(!!ev.target.value);
                }}
                className={classNames(styles.input, { [styles.inputInvalid]: !isValid })} />
            {!isValid &&
                <span className={styles.warning}>This field is required</span>
            }
        </div>
    );
};

export default DateInput;