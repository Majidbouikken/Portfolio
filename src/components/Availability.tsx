const Availability: React.FC<{ isAvailable?: boolean }> = ({ isAvailable = true }) => {
    const timezone = 'Europe/Paris';
    const options: Intl.DateTimeFormatOptions = { timeZone: timezone, hour12: true, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    const localTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    return (<div className="group fixed flex flex-row h-12 justify-stretch items-center top-4 start-4 px-4 py-2 gap-3 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md z-20 transition-colors duration-500 cursor-pointer">
        {isAvailable?
            (<div className="rotate-45 flex">
                <div className="h-2 w-2 bg-green-400 rounded-sm animate-throb" />
                <div className="absolute m-auto h-2 w-2 bg-green-400 rounded-sm" />
            </div>) :
            (<div className="rotate-45 flex">
                <div className="h-2 w-2 bg-red-400 rounded-full animate-throb" />
                <div className="absolute m-auto h-2 w-2 bg-red-400 rounded-full" />
            </div>)
        }
        <a className="text-text-500 dark:text-text-400 font-semibold">
            {isAvailable? 'Open for work' : 'Non available'}
        </a>
        <caption className="absolute start-full px-4 text-nowrap transition-all -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-500 delay-300 pointer-events-none">
            {localTime} | Paris, France
        </caption>
    </div>);
}

export default Availability;