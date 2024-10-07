"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mangaList, Manga } from '@/lib/animeData';

const ITEMS_PER_PAGE = 24;

export default function MangaPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mangaList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMangaList = mangaList.slice(startIndex, endIndex);

  const renderMangaCard = (manga: Manga) => (
    <Card key={manga.id} className="bg-gray-800 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
          <Image
            src={manga.image}
            alt={manga.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-gray-900 to-transparent">
            <h3 className="text-sm sm:text-base font-semibold mb-1 truncate">{manga.title}</h3>
            <span className="bg-yellow-500 text-black font-bold py-1 px-2 rounded text-xs">
              MAL {manga.rating.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Manga Collection</h1>
      <p className="text-xl mb-8">Discover the latest and greatest manga titles.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {currentMangaList.map(renderMangaCard)}
      </div>
      {totalPages > 1 && (
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
    </main>
  );
}