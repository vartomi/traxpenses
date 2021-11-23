import type { NextApiRequest, NextApiResponse } from 'next';
import { Moment } from 'moment';
import { MockData } from './mock';

export enum CategoryType {
    Travel = 'Travel',
    Food = 'Food',
    Electronics = 'Electronics',
    Other = 'Other'
}

export enum Currency {
    CHF = 'CHF',
    EUR = 'EUR',
    USD = 'USD',
    GBP = 'GBP'
}

export interface Expense {
    id: string;
    transactionDate: Moment;
    amount: number;
    recipient: string;
    currency: Currency;
    type: CategoryType;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Expense[]>
) {
    const mockData = MockData.getInstance();

    setTimeout(() => {

        if (req.method === 'GET') {
            res.status(200).json(mockData.getExpenses());
        } else if (req.method === 'POST') {
            mockData.addExpense(JSON.parse(req.body));
            res.status(200).end();
        }

    }, 1000);
}
