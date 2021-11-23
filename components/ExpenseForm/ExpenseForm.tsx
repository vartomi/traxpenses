import moment from 'moment';
import { useState } from 'react';
import { CategoryType, Currency, Expense } from '../../pages/api/expenses';
import { getGUID } from '../../utils/expenses';
import DropdownInput from './DropdownInput';
import NumberInput from './NumberInput';
import Input from './Input';
import DateInput from './DateInput';
import Button, { ButtonType } from '../Button';

interface ExpenseFormProps {
  onSave: (expense: Expense) => void;
  onDelete?: (id: string) => void;
  expense?: Expense;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ expense, onSave, onDelete }) => {
    const [amount, setAmount] = useState(expense?.amount ?? 0);
    const [currency, setCurrency] = useState(expense?.currency ?? Currency.CHF);
    const [recipient, setRecipient] = useState(expense?.recipient ?? '');
    const [transactionDate, setTransactionDate] = useState(expense?.transactionDate ?? moment());
    const [category, setCategory] = useState(expense?.type ?? CategoryType.Other);

    const isValid = amount && currency && recipient && transactionDate?.isValid() && category;

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <NumberInput
                                        className="col-span-6 sm:col-span-3"
                                        label="Amount"
                                        value={amount}
                                        onChange={setAmount}
                                    />

                                    <DropdownInput<Currency>
                                        className="col-span-6 sm:col-span-3"
                                        label="Currency"
                                        options={Object.keys(Currency)}
                                        value={currency}
                                        onChange={setCurrency}
                                    />

                                    <Input
                                        className="col-span-6 sm:col-span-3"
                                        label="Recipient"
                                        value={recipient}
                                        onChange={setRecipient}
                                    />

                                    <DateInput
                                        className="col-span-6 sm:col-span-3"
                                        label="Transaction Date"
                                        value={transactionDate}
                                        onChange={setTransactionDate}
                                    />

                                    <DropdownInput<CategoryType>
                                        className="col-span-6 sm:col-span-3"
                                        label="Category"
                                        options={Object.keys(CategoryType)}
                                        value={category}
                                        onChange={setCategory}
                                    />

                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                {onDelete &&
                                    <Button
                                        label="Delete"
                                        type={ButtonType.Secondary}
                                        onClick={() => onDelete(expense?.id ?? '')}
                                    />
                                }
                                <Button
                                    label="Save"
                                    type={ButtonType.Primary}
                                    disabled={!isValid}
                                    className="ml-2"
                                    onClick={() => {
                                        onSave({
                                            id: expense?.id ?? getGUID(),
                                            transactionDate,
                                            recipient,
                                            amount,
                                            currency,
                                            type: category
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseForm;