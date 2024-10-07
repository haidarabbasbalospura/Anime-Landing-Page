"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { animeList, Anime } from '@/lib/animeData';

const ITEMS_PER_PAGE = 24;

export default function BrowseSection({ showAll = false }: { showAll?: boolean }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(animeList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAnimeList = showAll ? animeList.slice(startIndex, endIndex) : animeList.slice(0, ITEMS_PER_PAGE);

  const renderAnimeCard = (anime: Anime) => (
    <Card key={anime.id} className="bg-gray-800 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
          <Image
            src={anime.image}
            alt={anime.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-gray-900 to-transparent">
            <h3 className="text-sm sm:text-base font-semibold mb-1 truncate">{anime.title}</h3>
            <span className="bg-yellow-500 text-black font-bold py-1 px-2 rounded text-xs">
              MAL {anime.rating.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Browse Anime</h2>
        {!showAll && (
          <Link href="/browse">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {currentAnimeList.map(renderAnimeCard)}
      </div>
      {showAll && totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            size="sm"
          >
            Previous
          </Button>
          <span className="py-2 px-4 bg-gray-700 rounded text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            size="sm"
          >
            Next
          </Button>
        </div>
      )}
    </section>
  );
}