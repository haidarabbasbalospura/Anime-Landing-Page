export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
}

export const animeList: Anime[] = [
  { id: 1, title: "Fullmetal Alchemist: Brotherhood", image: "https://cdn.myanimelist.net/images/anime/1223/96541l.jpg", rating: 9.11 },
  { id: 2, title: "Death Note", image: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg", rating: 8.62 },
  { id: 3, title: "Steins;Gate", image: "https://cdn.myanimelist.net/images/anime/5/73199l.jpg", rating: 9.07 },
  { id: 4, title: "Attack on Titan", image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg", rating: 8.54 },
  { id: 5, title: "Code Geass", image: "https://cdn.myanimelist.net/images/anime/5/50331l.jpg", rating: 8.70 },
  { id: 6, title: "Hunter x Hunter (2011)", image: "https://cdn.myanimelist.net/images/anime/11/33657l.jpg", rating: 9.04 },
  { id: 7, title: "One Punch Man", image: "https://cdn.myanimelist.net/images/anime/12/76049l.jpg", rating: 8.50 },
  { id: 8, title: "My Hero Academia", image: "https://cdn.myanimelist.net/images/anime/10/78745l.jpg", rating: 8.15 },
  { id: 9, title: "Sword Art Online", image: "https://cdn.myanimelist.net/images/anime/11/39717l.jpg", rating: 7.20 },
  { id: 10, title: "Demon Slayer", image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg", rating: 8.51 },
  // ... Add 90 more anime entries here
  { id: 100, title: "Violet Evergarden", image: "https://cdn.myanimelist.net/images/anime/1329/93506l.jpg", rating: 8.67 },
  { id: 101, title: "Your Name.", image: "https://cdn.myanimelist.net/images/anime/5/87048l.jpg", rating: 8.85 },
  { id: 102, title: "A Silent Voice", image: "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg", rating: 8.94 },
  { id: 103, title: "Spirited Away", image: "https://cdn.myanimelist.net/images/anime/6/79597l.jpg", rating: 8.77 },
  { id: 104, title: "Howl's Moving Castle", image: "https://cdn.myanimelist.net/images/anime/5/75810l.jpg", rating: 8.66 },
  { id: 105, title: "Princess Mononoke", image: "https://cdn.myanimelist.net/images/anime/7/75919l.jpg", rating: 8.67 },
];

export interface Manga {
  id: number;
  title: string;
  image: string;
  rating: number;
}

export const mangaList: Manga[] = [
  { id: 1, title: "Berserk", image: "https://cdn.myanimelist.net/images/manga/1/157897l.jpg", rating: 9.46 },
  { id: 2, title: "One Piece", image: "https://cdn.myanimelist.net/images/manga/2/253146l.jpg", rating: 9.20 },
  { id: 3, title: "Vagabond", image: "https://cdn.myanimelist.net/images/manga/1/259070l.jpg", rating: 9.23 },
  { id: 4, title: "Monster", image: "https://cdn.myanimelist.net/images/manga/3/258224l.jpg", rating: 9.16 },
  { id: 5, title: "Fullmetal Alchemist", image: "https://cdn.myanimelist.net/images/manga/3/243675l.jpg", rating: 9.03 },
  // ... Add 95 more manga entries here
  { id: 100, title: "Oyasumi Punpun", image: "https://cdn.myanimelist.net/images/manga/3/266834l.jpg", rating: 9.04 },
];

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
}

export const newsList: NewsItem[] = [
  {
    id: 1,
    title: "New 'Demon Slayer' Movie Announced",
    date: "2023-06-15",
    summary: "A new Demon Slayer movie has been announced, continuing the story from the Swordsmith Village Arc."
  },
  {
    id: 2,
    title: "One Piece Manga Enters Final Saga",
    date: "2023-06-10",
    summary: "Eiichiro Oda's One Piece manga has officially entered its final saga after 25 years of serialization."
  },
  {
    id: 3,
    title: "Attack on Titan Final Season Part 3 Release Date",
    date: "2023-06-05",
    summary: "The release date for Attack on Titan Final Season Part 3 has been revealed, set to air in early 2024."
  },
  // ... Add 47 more news items here
  {
    id: 50,
    title: "Studio Ghibli Announces New Film Project",
    date: "2023-05-01",
    summary: "Legendary animation studio Ghibli has revealed plans for a new feature film, set to begin production later this year."
  },
];