import LoadingBalls from "../components/LoadingBalls";
import { IconInstagram, IconLinkedin, IconUpwork } from "../icons";

const HireMePage: React.FC = () => {
    return (
        <div id="hire-me-page" className="max-w-7xl mx-auto my-32 px-8">
            <div className="flex flex-col items-baseline gap-4">
                <h1 className="text-6xl mb-4">Let's work together</h1>
                <div className="flex flex-col items-baseline gap-4 w-full">
                    <input placeholder="Your fullname" className="text-2xl max-w-3xl w-full resize-none overflow-y-auto bg-transparent outline-none" />
                    <textarea placeholder="Write your message here..." className="text-2xl h-40 max-w-3xl w-full resize-none overflow-y-auto bg-transparent outline-none" />
                    <button className="flex flex-row gap-2 items-center text-xl text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500">
                        {true? "SEND MESSAGE" : (<LoadingBalls />)}
                        <img src={require('./../assets/icons/3d-send.png')} className="h-8 w-8" />
                    </button>
                    {false && <div className="absolute flex flex-row gap-4 items-end">
                        <h2>Your message has been sent!</h2>
                        <img src={require('./../assets/icons/3d-success.png')} className="h-16 w-16" />
                    </div>}
                </div>


                <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 gap-y-2 gap-x-8">
                    <div className="grid-item mt-auto">You can also email me</div>
                    <a href="mailto:bouikkenmajid.com" className="text-xl text-text-800 dark:text-text-50 px-4 py-2 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full transition-colors duration-500">bouikkenmajid@gmail.com</a>

                    <div className="grid-item mt-auto">Or find me at</div>
                    <div className="grid-item flex flex-wrap gap-4">
                        <a href="https://www.linkedin.com/in/abdelmadjid-bouikken/" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 hover:bg-linkedin border-background-400/50 dark:border-background-600/50 hover:border-linkedin dark:hover:border-linkedin border-2 rounded-full"><IconLinkedin className="h-8 w-8" /></a>
                        <a href="https://www.upwork.com/freelancers/~0177e23888de4f6747" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 hover:bg-upwork border-background-400/50 dark:border-background-600/50 hover:border-upwork dark:hover:border-upwork border-2 rounded-full"><IconUpwork className="h-8 w-8" /></a>
                        <a href="https://www.instagram.com/maj.bba/" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 instagram-gradient border-background-400/50 dark:border-background-600/50 hover:border-instagram dark:hover:border-instagram border-2 rounded-full"><IconInstagram className="h-8 w-8" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireMePage;