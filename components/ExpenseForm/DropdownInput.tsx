interface DropdownInputProps<T> {
    className?: string;
    label: string;
    onChange: (option: T) => void;
    options: string[];
    value: T;
}

const DropdownInput = <T extends string>({ className, label, options, value, onChange }: DropdownInputProps<T>) => {
    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select
                value={value}
                onChange={({ target }) => onChange(target.value as T)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm">
                {
                    options.map((option) => {
                        return <option key={`option-${option}`}>{option}</option>;
                    })
                }
            </select>
        </div>
    );
};

export default DropdownInput;




