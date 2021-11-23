import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ExpensesTable from '../../components/ExpenseTable/ExpensesTable';
import NavigationBar from '../../components/NavigationBar';
import useSWR from 'swr';
import { fetcher, getExpense } from '../../utils/expenses';
import LoadingIndicator from '../../components/LoadingIndicator';

const Expenses: NextPage = () => {
    const title = 'My Expenses';

    const { data, error, isValidating } = useSWR('/api/expenses', fetcher);

    return (
        <div>
            <Head>
                <title>{`TraXpenses - ${title}`}</title>
                <meta name="description" content="Track your daily expenses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar active="myExpenses"/>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {isValidating ?
                        <LoadingIndicator /> :
                        <>
                            <ExpensesTable expenses={data.map(getExpense)}/>
                            <Link href="/expenses/add" >
                                <a className="flex w-44 justify-center mt-8 px-8 py-3 border text-md font-medium shadow rounded-md text-white bg-blue-900 hover:bg-blue-800">
                                    Add expense
                                </a>
                            </Link>
                        </>
                    }
                </div>
            </main>
        </div>
    );
};

export default Expenses;
