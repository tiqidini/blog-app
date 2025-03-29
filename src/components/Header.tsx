import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-5 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-tight text-yellow-300 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">
            IT-Блог Юного Кодера
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg font-medium text-gray-200 hover:text-white border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300 pb-1">
                Главная
              </Link>
            </li>
            {/* Можно добавить другие ссылки, например, 'Обо мне' */}
            {/* <li><Link href="/about" className="hover:text-gray-400 transition-colors">Обо мне</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 