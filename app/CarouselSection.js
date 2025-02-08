"use client";

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "/clinical-trial.jpg",
      title: "Transforming Drug Testing",
      description: "Reliable volunteer data for pharmaceutical research.",
    },
    {
      id: 2,
      image: "/pharma-lab.jpg",
      title: "Safe & Ethical Trials",
      description: "Ensuring compliance in clinical studies.",
    },
    {
      id: 3,
      image: "/data-security.jpg",
      title: "Secure Data Access",
      description: "Verified companies get access to clinical data securely.",
    },
  ];

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
    setIsPlaying(false); // Pause autoplay
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(true); // Resume autoplay when modal closes
  };

  return (
    <div id="carousel-section" className="mt-12 flex justify-center">
      <div className="max-w-xl w-full">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          Why Choose Tech Vitals?
        </h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay={isPlaying}
          interval={2000} // Faster slide switching (2s)
          transitionTime={700} // Faster transition animation (0.7s)
          stopOnHover={true}
          showArrows={true}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative cursor-pointer"
              onClick={() => handleSlideClick(slide)}
            >
              <img src={slide.image} alt={slide.title} className="rounded-lg h-48 object-cover" />
              <div className="absolute bottom-3 left-3 bg-customBlue3 bg-opacity-60 text-white p-2 rounded-lg text-sm">
                <h3 className="font-bold">{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedSlide && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-customBlue3 bg-opacity-60"
          onClick={closeModal} // Clicking outside closes the modal
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={closeModal}
            >
              ✖
            </button>
            <img src={selectedSlide.image} alt={selectedSlide.title} className="rounded-lg mb-4" />
            <h3 className="text-lg font-bold">{selectedSlide.title}</h3>
            <p className="text-gray-700 mt-2">{selectedSlide.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
