

import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps {
    label: string;
    onClick: () => void;
    type: ButtonType;
    disabled?: boolean;
    className?: string;
}

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary'
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, className, type }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames(styles.button, className, styles[type])}
        >
            {label}
        </button>
    );
};

export default Button;



