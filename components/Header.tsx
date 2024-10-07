"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-500">AnimeStream</Link>
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/browse" className="hover:text-orange-500">Browse</Link></li>
                <li><Link href="/manga" className="hover:text-orange-500">Manga</Link></li>
                <li><Link href="/news" className="hover:text-orange-500">News</Link></li>
              </ul>
            </nav>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default">Sign In</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/browse" className="block py-2 hover:text-orange-500">Browse</Link></li>
              <li><Link href="/manga" className="block py-2 hover:text-orange-500">Manga</Link></li>
              <li><Link href="/news" className="block py-2 hover:text-orange-500">News</Link></li>
              <li><Button variant="default" className="w-full mt-2">Sign In</Button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}