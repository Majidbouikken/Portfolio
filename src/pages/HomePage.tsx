const HomePage: React.FC = () => {
    return (
        <div id="home-page" className="relative h-screen max-w-7xl mx-auto py-32 px-8 flex flex-col justify-center items-center">
            <div id="who-am-i" className="flex flex-col w-full mt-auto md:flex-row justify-between items-start md:items-end">
                <h1 className="text-9xl mb-4">Hiya!</h1>
                <h2 className="max-w-2xl w-full text-end">I'm Abdelmadjid Bouikken,<br />a software engineer based in Paris.</h2>
            </div>
            <div className="absolute -z-40 h-full p-16 overflow-clip md:overflow-visible">
                <img src={require('./../assets/images/3d-room.png')} className="h-full w-full object-contain translate-x-32 -translate-y-32 md:translate-x-0 md:translate-y-0" />
            </div>
        </div>
    );
}

export default HomePage;