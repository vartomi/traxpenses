const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
            <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        </div>
    );
};

export default LoadingIndicator;







