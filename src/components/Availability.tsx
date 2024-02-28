const Availability: React.FC<{ isAvailable?: boolean }> = ({ isAvailable = true }) => {
    const timezone = 'Europe/Paris';
    const options: Intl.DateTimeFormatOptions = { timeZone: timezone, hour12: true, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    const localTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    return (<div className="group fixed flex flex-row h-12 justify-stretch items-center top-4 start-4 bg-gray-800/50 hover:bg-gray-800 px-4 py-2 gap-3 border-gray-600/50 hover:border-gray-600 border-2 rounded-full transition-colors duration-500 cursor-pointer">
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
        <h5>
            Open for work
        </h5>
        <caption className="absolute start-full px-4 text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {localTime} | Paris, France
        </caption>
    </div>);
}

export default Availability;