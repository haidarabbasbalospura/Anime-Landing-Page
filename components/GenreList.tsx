import { Button } from '@/components/ui/button';

const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mecha", "Mystery",
  "Romance", "Sci-Fi", "Slice of Life", "Sports", "Supernatural", "Thriller"
];

export default function GenreList() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Explore Genres</h2>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {genres.map((genre) => (
          <Button key={genre} variant="outline" size="sm" className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700">
            {genre}
          </Button>
        ))}
      </div>
    </section>
  );
}