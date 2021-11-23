import Link from 'next/link';

interface NavigationBarProps {
    active?: string;
}

type MenuItem = {
    id: string,
    value: string,
    href: string
};

const menuItems: MenuItem[] = [
    { id: 'myExpenses', value: 'My Expenses', href: '/expenses'},
    { id: 'categories', value: 'Categories', href: '#'}
];

const NavigationBar: React.FC<NavigationBarProps> = ({ active }) => {
    return (
        <div className="relative bg-white shadow overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full">
                    <div>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <Link href="/">
                                            <a>
                                                <h1 className="text-blue-900 text-xl font-bold">TraXpenses</h1>
                                            </a>
                                        </Link>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <button
                                                type="button"
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                aria-expanded="false"
                                            >
                                                <span className="sr-only">Open main menu</span>
                                                <svg
                                                    className="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-4">
                                    {
                                        menuItems.map((item, idx) => {
                                            return (
                                                <Link href={item.href} key={`menu-item-${idx}`}>
                                                    <a className={`font-medium px-4 py-3 ${item.id === active ? 'border text-blue-900 border-blue-900 rounded-md': 'text-gray-500 hover:text-black'}`}>{item.value}</a>
                                                </Link>
                                            );
                                        })
                                    }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default NavigationBar;
