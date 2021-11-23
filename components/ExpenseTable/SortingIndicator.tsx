export enum Sort {
    Asc = 1,
    Desc = -1
}

interface SortingIndicatorProps {
    direction: Sort;
}

const SortingIndicator: React.FC<SortingIndicatorProps> = ({ direction }) => {
    if (direction === Sort.Desc) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
        );
    } else {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
        );
    }
};

export default SortingIndicator;