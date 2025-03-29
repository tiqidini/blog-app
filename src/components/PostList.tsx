import Link from 'next/link';

// Типизация для поста (пока простая)
interface Post {
  id: string;
  title: string;
  excerpt: string; // Краткое содержание
  content?: string; // Добавляем необязательное поле для полного контента
  date: string;
  type: 'text' | 'video'; // Добавляем тип поста
  videoUrl?: string; // Необязательное поле для URL видео
  // В будущем можно добавить тип контента (текст/видео), URL видео и т.д.
}

interface PostListProps {
  posts: Post[];
}

const PostCard = ({ post }: { post: Post }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-cyan-500/30">
    {/* Можно добавить изображение или превью видео */}
    <div className="p-6">
      <p className="text-sm text-gray-400 mb-1">{post.date}</p>
      <Link href={`/posts/${post.id}`} className="block hover:no-underline">
        <h3 className="text-2xl font-semibold text-white hover:text-cyan-300 transition-colors mb-2 leading-tight">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link 
        href={`/posts/${post.id}`} 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-colors duration-200 text-base tracking-wide shadow hover:shadow-md"
      >
        Читать далее
      </Link>
    </div>
  </div>
);

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      ) : (
        <p className="text-gray-400 col-span-full text-center">Пока нет ни одного поста.</p>
      )}
    </div>
  );
};

export default PostList;
export type { Post }; // Экспортируем обновленный тип Post 