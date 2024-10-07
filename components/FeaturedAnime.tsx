"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const featuredAnime = [
  {
    id: 1,
    title: "Attack on Titan",
    description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls.",
    image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    rating: 8.54
  },
  {
    id: 2,
    title: "My Hero Academia",
    description: "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk.",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
    rating: 8.15
  },
  {
    id: 3,
    title: "Demon Slayer",
    description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    rating: 8.51
  }
];

export default function FeaturedAnime() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredAnime.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredAnime.length) % featuredAnime.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentAnime = featuredAnime[currentIndex];

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-12">
      <Image
        src={currentAnime.image}
        alt={currentAnime.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{currentAnime.title}</h2>
        <p className="text-sm sm:text-base md:text-xl mb-4 line-clamp-2 md:line-clamp-3">{currentAnime.description}</p>
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-yellow-500 text-black font-bold py-1 px-2 rounded text-xs sm:text-sm">
            MAL {currentAnime.rating.toFixed(2)}
          </span>
          <Button variant="default" size="sm" className="sm:text-base">
            <Play className="mr-2 h-4 w-4" /> Watch Now
          </Button>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 sm:p-2 rounded-full"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 sm:p-2 rounded-full"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}