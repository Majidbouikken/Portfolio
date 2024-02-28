const HireMePage: React.FC = () => {
    return (
        <div id="hire-me-page" className="max-w-7xl mx-auto my-32 p-8">
            <div className="flex flex-col items-baseline gap-8">
                <h1 className="text-6xl">Let's work together</h1>
                <input placeholder="Your fullname" className="text-2xl max-w-3xl w-full resize-none overflow-y-auto bg-transparent outline-none" />
                <textarea placeholder="Write your message here..." className="text-2xl h-40 max-w-3xl w-full resize-none overflow-y-auto bg-transparent outline-none" />
                <button className="text-2xl bg-gray-800/50 hover:bg-gray-800 px-4 py-2 border-gray-600/50 hover:border-gray-600 border-2 rounded-full transition-colors duration-500">Send message</button>
            </div>
        </div>
    );
}

export default HireMePage;