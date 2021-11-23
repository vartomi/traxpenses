import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import NavigationBar from '../../components/NavigationBar';
import { Expense } from '../api/expenses';
import { useRouter } from 'next/router';
import LoadingIndicator from '../../components/LoadingIndicator';

const AddExpense: NextPage = () => {
    const title = 'Add new expense';
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();


    const onSave = (expense: Expense) => {
        setIsLoading(true);
        const request = new Request('/api/expenses', {
            method: 'POST',
            body: JSON.stringify(expense)
        });
        fetch(request).then(() => router.push('/expenses'));
    };

    return (
        <div>
            <Head>
                <title>{`TraXpenses - ${title}`}</title>
                <meta name="description" content="Track your daily expenses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {isLoading ?
                        <LoadingIndicator /> :
                        <ExpenseForm
                            onSave={onSave}
                        />
                    }
                </div>
            </main>
        </div>
    );
};

export default AddExpense;
