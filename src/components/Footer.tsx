const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-6 px-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} IT-Блог Юного Кодера. Создано с ❤️ и ☕️.
        </p>
        {/* Можно добавить ссылки на GitHub, соцсети и т.д. */}
        {/* <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors mx-2">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors mx-2">Twitter</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 