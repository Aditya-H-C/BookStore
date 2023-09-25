// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-end space-x-6">
        <Link href="/" className="text-white font-bold text-xl">
          Home
        </Link>
        <Link href="/about" className="text-white font-bold text-xl">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
