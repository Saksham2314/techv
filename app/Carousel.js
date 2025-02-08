"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Volunteer Participation",
    description: "Find volunteers ready to contribute to your clinical trials.",
    image: "./volunteers.jpg",
  },
  {
    title: "Enhanced Drug Monitoring",
    description: "Leverage data to improve drug safety and efficacy.",
    image: "./drug.jpg",
  },
  {
    title: "Streamlined Compliance",
    description: "Ensure your trials meet regulatory standards easily.",
    image: "./compliance.jpg",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically move to the next slide at a constant speed when not paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 1000); // Adjusted speed to 1 second (1000 milliseconds)
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <div className="flex justify-center py-8">
      <div className="relative w-[70%] max-w-2xl p-6 bg-customBlue2 rounded-lg shadow-lg">
        <div
          className="relative w-full h-96 flex justify-center items-center overflow-hidden"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-customBlue2 p-2 rounded-full hover:bg-customBlue3"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(
                  (prev) => (prev - 1 + slides.length) % slides.length
                );
              }}
            >
              ❮
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-customBlue2 p-2 rounded-full hover:bg-customBlue3"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev + 1) % slides.length);
              }}
            >
              ❯
            </button>
          </div>

          {/* Carousel Slides */}
          <AnimatePresence>
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  className={`absolute w-64 h-80 rounded-lg shadow-lg bg-cover bg-center`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    zIndex: 5,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.8,
                    zIndex: isActive ? 10 : 5,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    zIndex: 5,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3 className="text-xl font-bold">{slide.title}</h3>
                      <p className="text-sm mt-2">{slide.description}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-customBlue"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
