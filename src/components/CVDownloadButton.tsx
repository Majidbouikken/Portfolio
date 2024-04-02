import { IconArrowDown } from "../icons";

const CVDownloadButton: React.FC = () => {
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = './../assets/downloadable/cv-fr.pdf';
  //   link.download = 'cv_abdelmadjid_bouikken-bahi-amar_fr.pdf';
  //   link.click();
  // };

  return (
    <div className="group flex items-center justify-center h-12 w-12 p-0 gap-3 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500 z-20 cursor-pointer">
      <img src={require('./../assets/icons/3d-cog.png')} className="h-10 w-10" />
      {/* <IconArrowDown className="h-8 w-8 fill-background-500" /> */}
      <div className="absolute h-10 w-10 -z-10 settings-gradient scale-125 opacity-0 group-hover:opacity-60 transition-all duration-500" />
    </div>
  );
}
  
  export default CVDownloadButton;