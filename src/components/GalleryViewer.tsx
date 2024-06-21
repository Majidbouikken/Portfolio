import { useEffect, useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight, IconClose } from "../icons";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const GalleryViewer: React.FC<{ images: {childImageSharp: {gatsbyImageData: IGatsbyImageData}}[]} > = ({ images }) => {
  const [index, setIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<IGatsbyImageData | null>(null);
  const imagePreviewRef = useRef<HTMLDivElement>(null);

  const handleClick = (image: { childImageSharp: { gatsbyImageData: IGatsbyImageData; }; }, index: number) => {
    setSelectedImage(image.childImageSharp.gatsbyImageData);
    setIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIndex(null);
  };

  const handlePrevious = (index: number) => {
    setSelectedImage(images[index-1].childImageSharp.gatsbyImageData);
    setIndex(index-1);
  };

  const handleNext = (index: number) => {
    setSelectedImage(images[index+1].childImageSharp.gatsbyImageData);
    setIndex(index+1);
  };

  const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious(index);
    } else if (event.key === 'ArrowRight') {
      handleNext(index);
    } else if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (imagePreviewRef.current) {
      imagePreviewRef.current.focus();
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div onClick={() => handleClick(image, index)}>
        <GatsbyImage
          key={`gallery-image-${index}`}
          image={image.childImageSharp.gatsbyImageData}
          alt={`Screenshot ${image}`}
          className="brightness-100 hover:brightness-50 transition-all duration-300 cursor-pointer z-0"
        />
        </div>
      ))}
      {selectedImage && index !== null && (
        <div
          id="image-preview"
          ref={imagePreviewRef}
          onKeyDown={(event) => {handleKeyPress(event, index);}}
          tabIndex={0}
          className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-background-950/60 backdrop-blur-md flex items-center justify-center"
        >
          <GatsbyImage image={selectedImage} alt={`Full Screen`} objectFit="contain" className="h-full w-full" />
          <caption className="absolute top-4 start-4 text-text-50 font-semibold">{index!! + 1}/{images.length}</caption>
          
          <div onClick={handleClose} className="absolute w-6 h-6 top-4 end-4 fill-text-400 hover:fill-text-50 cursor-pointer"><IconClose /></div>
          {index !== 0 && (<div onClick={() => {handlePrevious(index)}} className="absolute w-6 h-6 start-4 fill-text-400 hover:fill-text-50 cursor-pointer"><IconArrowLeft /></div>)}
          {index !== (images.length - 1) && (<div onClick={() => {handleNext(index)}} className="absolute w-6 h-6 end-4 fill-text-400 hover:fill-text-50 cursor-pointer"><IconArrowRight /></div>)}
        </div>
      )}
    </div>
  );
}

export default GalleryViewer;