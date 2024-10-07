import BrowseSection from '@/components/BrowseSection';

export default function BrowsePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Browse Anime</h1>
      <p className="text-xl mb-8">Explore our vast collection of anime series and movies.</p>
      <BrowseSection showAll={true} />
    </main>
  );
}