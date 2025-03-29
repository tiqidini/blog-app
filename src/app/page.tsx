import PostList from '@/components/PostList';
import type { Post } from '@/components/PostList'; // Импортируем тип Post
import Link from 'next/link';

// Пример данных для постов
const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Как я начал программировать',
    excerpt: 'История моего пути в IT, первые шаги и важные решения.',
    date: '2024-03-15',
    type: 'text',
    content: 'Полное содержание поста...'
  },
  {
    id: '2',
    title: 'Топ-5 технологий 2024',
    excerpt: 'Обзор самых перспективных технологий в мире разработки.',
    date: '2024-03-14',
    type: 'text',
    content: 'Полное содержание поста...'
  },
  {
    id: '3',
    title: 'Видео: React vs Vue',
    excerpt: 'Сравнение двух популярных фреймворков для фронтенд-разработки.',
    date: '2024-03-13',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/example',
    content: 'Описание видео...'
  },
  {
    id: '4',
    title: 'Как писать чистый код',
    excerpt: 'Практические советы по написанию качественного кода.',
    date: '2024-03-12',
    type: 'text',
    content: 'Полное содержание поста...'
  }
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Добро пожаловать в мой блог
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Здесь я делюсь своими мыслями, опытом и знаниями о программировании, технологиях и жизни.
        </p>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Последние посты</h2>
          <Link 
            href="/admin/new-post" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Создать пост
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-cyan-300 border-b-2 border-cyan-700 pb-2">
          Свежие записи
        </h2>
        <PostList posts={samplePosts} />
      </section>
    </div>
  );
}
