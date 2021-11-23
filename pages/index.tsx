import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>TraXpenses</title>
                <meta name="description" content="Track your daily expenses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Easy track for your</span>
                        <span className="block text-blue-900 xl:inline xl:mx-3">daily expenses</span>
                    </h1>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/expenses/add" >
                                <a id="add-expense-button" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800">
                                    Add expense
                                </a>
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link href="/expenses">
                                <a id="my-expenses-button" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white border-blue-900 hover:text-blue-800 hover:border-blue-800">
                                    My Expenses
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
