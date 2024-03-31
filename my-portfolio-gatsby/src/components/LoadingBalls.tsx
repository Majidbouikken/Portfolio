const LoadingBalls: React.FC = () => {
    return (
        <div className="flex flex-row gap-1">
            <div className="animate-bounce h-3 w-3 bg-background-200 rounded-full" style={{ animationDelay: '0.0s', animationDuration: '0.5s' }} />
            <div className="animate-bounce h-3 w-3 bg-background-200 rounded-full" style={{ animationDelay: '0.1s', animationDuration: '0.5s' }} />
            <div className="animate-bounce h-3 w-3 bg-background-200 rounded-full" style={{ animationDelay: '0.2s', animationDuration: '0.5s' }} />
        </div>
    );
}

export default LoadingBalls;