import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { mangaList } from '@/lib/animeData';

const popularManga = mangaList.slice(0, 12); // Display top 12 manga

export default function MangaSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Popular Manga</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {popularManga.map((manga) => (
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
        ))}
      </div>
    </section>
  );
}