import Head from 'next/head';
import NavigationBar from './NavigationBar';

const ErrorPanel: React.FC = () => {
    return (
        <div>
            <Head>
                <title>TraXpenses - Error</title>
                <meta name="description" content="Track your daily expenses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl">
                            <span className="block xl:inline">Something went wrong :(</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                            Please try again later.
                        </p>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default ErrorPanel;
