import { ChangeEvent, ChangeEventHandler, useState } from "react";
import LoadingBalls from "../components/LoadingBalls";
import { IconGithub, IconInstagram, IconLinkedin, IconUpwork } from "../icons";
import submitMessage from "../services/HireMeService";
import HireMeForm from "../types/HireMeForm";
import { useTranslation } from "react-i18next";

const HireMePage: React.FC = () => {
    const [ loading, setLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ fullname, setFullname ] = useState("");
    const [ message, setMessage ] = useState("");
    const { t } = useTranslation();

    const handleFullnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFullname(event.target.value);
    }

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const handleSubmit = async (data: HireMeForm) => {
        setLoading(true);
        setSuccess(false);
        try {
            await submitMessage(data);
            setSuccess(true);
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div id="hire-me-page" className="max-w-7xl mx-auto my-32 px-8">
            <div className="flex flex-col items-start gap-4">
                <h1 className="mb-4">{t('let_us_work_together')}</h1>
                <div className="flex flex-col items-start gap-4 w-full">
                    <input onChange={handleFullnameChange} placeholder={t('your_fullname')} className="text-2xl max-w-3xl w-full resize-none overflow-y-auto bg-transparent outline-none" style={{visibility: success? 'hidden': 'visible' }} />
                    <textarea onChange={handleMessageChange} placeholder={t('write_your_message_here')} className="text-2xl h-40 max-w-3xl w-full resize-none overflow-y-auto bg-transparent outline-none" style={{visibility: success? 'hidden': 'visible' }} />
                    <button
                        onClick={() => {handleSubmit({ fullname: fullname, message: message})}}
                        disabled={loading}
                        className="flex flex-row gap-2 items-center text-xl text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
                        style={{visibility: success? 'hidden': 'visible' }}
                    >
                        {!loading? t('send_message') : (<LoadingBalls />)}
                        <img src={require('./../assets/icons/3d-send.png')} className="h-8 w-8" />
                    </button>
                    {success && <div className="absolute flex flex-row gap-4 items-end">
                        <h2>{t('your_message_has_been_sent')}</h2>
                        <img src={require('./../assets/icons/3d-success.png')} className="h-16 w-16" />
                    </div>}
                </div>

                <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 gap-y-2 gap-x-8">
                    <div className="grid-item mt-auto">{t('you_can_also_email_me')}</div>
                    <a href="mailto:bouikkenmajid.com" className="text-xl text-text-800 dark:text-text-50 px-4 py-2 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full transition-colors duration-500">bouikkenmajid@gmail.com</a>

                    <div className="grid-item mt-auto">{t('or_find_me_at')}</div>
                    <div className="grid-item flex flex-wrap gap-4">
                        <a href="https://www.linkedin.com/in/abdelmadjid-bouikken/" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 hover:bg-linkedin border-background-400/50 dark:border-background-600/50 hover:border-linkedin dark:hover:border-linkedin border-2 rounded-full"><IconLinkedin className="h-8 w-8" /></a>
                        <a href="https://www.upwork.com/freelancers/~0177e23888de4f6747" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 hover:bg-upwork border-background-400/50 dark:border-background-600/50 hover:border-upwork dark:hover:border-upwork border-2 rounded-full"><IconUpwork className="h-8 w-8" /></a>
                        <a href="https://www.instagram.com/maj.bba/" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 instagram-gradient border-background-400/50 dark:border-background-600/50 hover:border-instagram dark:hover:border-instagram border-2 rounded-full"><IconInstagram className="h-8 w-8" /></a>
                        <a href="https://www.github.com/majidbouikken/" target="_blank" className="fill-text-800 dark:fill-text-50 hover:fill-white p-2 hover:bg-github border-background-400/50 dark:border-background-600/50 hover:border-github dark:hover:border-github border-2 rounded-full"><IconGithub className="h-8 w-8" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireMePage;