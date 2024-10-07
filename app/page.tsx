import FeaturedAnime from '@/components/FeaturedAnime';
import PopularAnime from '@/components/PopularAnime';
import BrowseSection from '@/components/BrowseSection';
import MangaSection from '@/components/MangaSection';
import NewsSection from '@/components/NewsSection';
import GenreList from '@/components/GenreList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <FeaturedAnime />
      <PopularAnime />
      <BrowseSection />
      <MangaSection />
      <NewsSection />
      <GenreList />
    </main>
  );
}