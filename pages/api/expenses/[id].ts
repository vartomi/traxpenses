import type { NextApiRequest, NextApiResponse } from 'next';
import { Expense } from '.';
import { MockData } from './mock';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Expense | Expense[]>
) {

    const mockData = MockData.getInstance();

    setTimeout(() => {

        if (req.method === 'GET') {
            const expense = mockData.getExpense(req.query.id as string);
            if (expense) {
                res.status(200).json(expense);
            } else {
                res.status(404).end();
            }
        } else if (req.method === 'DELETE') {
            mockData.deleteExpense(req.query.id as string);
            res.status(200).end();
        } else if (req.method === 'PUT') {
            mockData.updateExpense(JSON.parse(req.body));
            res.status(200).end();
        }

    }, 1000);

}