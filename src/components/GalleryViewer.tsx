import { useState } from "react";

const GalleryViewer: React.FC<{ images: string[] }> = ({ images }) => {
    const [index, setIndex] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
    const handleClick = (image: string, index: number) => {
        setSelectedImage(image);
        setIndex(index);
    };
  
    const handleClose = () => {
        setSelectedImage(null);
        setIndex(null);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Screenshot ${image}`}
            className="brightness-100 hover:brightness-50 transition-all duration-300 cursor-pointer"
            onClick={() => handleClick(image, index)}
          />
        ))}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 z-50 w-full h-full bg-background-950/60 backdrop-blur-md flex items-center justify-center"
            onClick={handleClose}
          >
            <img src={selectedImage} alt={`Full Screen`} className="object-contain max-h-full max-w-full" />
            <caption className="absolute top-4 start-4">{index!! + 1}/{images.length}</caption>
          </div>
        )}
      </div>
    );
}

export default GalleryViewer;