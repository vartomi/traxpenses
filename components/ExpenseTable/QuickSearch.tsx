
import styles from '../ExpenseForm/Input.module.css';

interface QuickSearchProps {
    onChange: (text: string) => void;
    className?: string;
}

const QuickSearch: React.FC<QuickSearchProps> = ({ onChange, className }) => {
    return (
        <div className={className}>
            <label className={styles.label}>Quick search:</label>
            <input
                type="text"
                onChange={(ev) => {
                    onChange(ev.target.value);
                }}
                className={styles.input}
            />
        </div>
    );
};

export default QuickSearch;