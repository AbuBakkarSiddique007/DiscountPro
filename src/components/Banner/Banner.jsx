import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    "/images/carousel-1.jpg",
    "/images/carousel-2.jpg",
    "/images/carousel-3.jpg",
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div>
            <div className="relative">

                <div className="relative h-56 md:h-96 overflow-hidden w-full">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>

                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>


                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                >
                    <FaChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Banner;