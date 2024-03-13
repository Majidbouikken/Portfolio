const ForFun: React.FC = () => {
    return (
        <div className="group fixed flex flex-row h-12 justify-stretch items-center bottom-4 start-4 bg-gray-800/50 hover:bg-gray-800 px-4 py-2 gap-3 border-gray-600/50 hover:border-gray-600 border-2 rounded-full transition-all duration-500 cursor-pointer">
            <div className="w-0 text-nowrap group-hover:w-auto opacity-0 group-hover:opacity-100 transition-all duration-500">For fun</div>
        </div>
    );
}

export default ForFun;