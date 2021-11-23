import moment from 'moment';
import { Expense } from '../pages/api/expenses';

export const getGUID = () => (new Date()).getTime().toString(36);


export const getExpense: (data: any) => Expense = (data) => {
    return ({
        id: data.id,
        transactionDate: moment(data.transactionDate).utc(),
        recipient: data.recipient,
        amount: data.amount,
        currency: data.currency,
        type: data.type
    });
};

export const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
};