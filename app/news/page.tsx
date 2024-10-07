import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { newsList } from '@/lib/animeData';

export default function NewsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Anime News</h1>
      <p className="text-xl mb-8">Stay up-to-date with the latest anime and manga news.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {newsList.map((item) => (
          <Card key={item.id} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg sm:text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">{item.date}</p>
              <p className="text-gray-300 text-sm sm:text-base">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}