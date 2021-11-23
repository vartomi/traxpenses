import moment from 'moment';
import { CategoryType, Currency, Expense } from '../pages/api/expenses';
import { DefaultDateTimeFormat } from '../pages/api/expenses/mock';
import { getExpense } from './expenses';


describe('expenses util', () => {
    it('has getExpense to convert data to Expense', () => {

        const rawData: any = {
            id: 'test',
            transactionDate: '2020-01-01T00:00:00.000Z',
            amount: 104.34,
            recipient: 'Galaxus AG',
            currency: 'CHF',
            type: 'Food'
        };

        const expense: Expense = getExpense(rawData);

        expect(expense.id).toEqual('test');
        expect(expense.currency).toEqual(Currency.CHF);
        expect(expense.type).toEqual(CategoryType.Food);
        expect(expense.transactionDate.isSame(moment('2020-01-01T00:00:00.000Z'))).toBeTruthy();
    });
});