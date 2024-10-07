import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/browse" className="hover:text-orange-500">Browse</Link></li>
              <li><Link href="/manga" className="hover:text-orange-500">Manga</Link></li>
              <li><Link href="/news" className="hover:text-orange-500">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="hover:text-orange-500">Login</Link></li>
              <li><Link href="/signup" className="hover:text-orange-500">Sign Up</Link></li>
              <li><Link href="/profile" className="hover:text-orange-500">My Profile</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-orange-500">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/copyright" className="hover:text-orange-500">Copyright</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500">Facebook</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Twitter</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 AnimeStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}