import moment from 'moment';
import { CategoryType, Currency, Expense } from '.';

export const DefaultDateTimeFormat = 'YYYY.MM.DD';

export class MockData {
    private static instance: MockData;

    private constructor() { }

    private data: Expense[] = [
        {
            id: 'kw9koynk',
            transactionDate: moment('2021.01.01', DefaultDateTimeFormat),
            amount: 104.34,
            recipient: 'Galaxus AG',
            currency: Currency.CHF,
            type: CategoryType.Other
        },
        {
            id: 'kw9kp18c',
            transactionDate: moment('2021.10.12', DefaultDateTimeFormat),
            amount: 2000.34,
            recipient: 'Apple GmbH',
            currency: Currency.CHF,
            type: CategoryType.Food
        },
        {
            id: 'kw9kp1v3',
            transactionDate: moment('2021.08.10', DefaultDateTimeFormat),
            amount: 100,
            recipient: 'Booking.com',
            currency: Currency.EUR,
            type: CategoryType.Travel
        },
        {
            id: 'kw9kp2mx',
            transactionDate: moment('2021.05.10', DefaultDateTimeFormat),
            amount: 100121012.34,
            recipient: 'Samsung GmbH',
            currency: Currency.EUR,
            type: CategoryType.Electronics
        }
    ];

    public static getInstance(): MockData {
        if (!MockData.instance) {
            MockData.instance = new MockData();
        }

        return MockData.instance;
    }

    public getExpenses() {
        return this.data;
    }

    public getExpense(id: string) {
        return this.data.find(exp => exp.id === id);
    }

    public updateExpense(expense: Expense) {
        this.data = this.data.map(exp => {
            return exp.id === expense.id ? expense : exp;
        });
    }

    public deleteExpense(id: string) {
        this.data = this.data.filter(exp => exp.id !== id);
    }

    public addExpense(expense: Expense) {
        this.data.push(expense);
    }
}