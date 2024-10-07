import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { newsList } from '@/lib/animeData';

const displayedNews = newsList.slice(0, 6); // Display top 6 news items

export default function NewsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Anime News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {displayedNews.map((item) => (
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
    </section>
  );
}