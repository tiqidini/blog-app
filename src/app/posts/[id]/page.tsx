import { notFound } from 'next/navigation';
import Link from 'next/link';

// Импортируем тип Post из PostList, чтобы не дублировать
import type { Post } from '@/components/PostList';

// Пример функции для получения данных поста по ID
// В реальном приложении здесь будет запрос к API или базе данных
async function getPostData(id: string): Promise<Post | null> { // Уточняем тип возвращаемого значения
  // Имитируем загрузку данных
  await new Promise(resolve => setTimeout(resolve, 100));

  // Используем тип Post для samplePosts
  const samplePosts: Post[] = [
    {
      id: 'first-post',
      title: 'Начало моего IT-пути: Первый "Hello, World!"',
      excerpt: 'Сегодня я написал свою первую программу! Это было так круто. Рассказываю, как это было и какие языки программирования я хочу изучить дальше.',
      content: `
<p>Ура! Сегодня я сделал это — написал свою первую строчку кода и увидел заветное "Hello, World!" на экране. Ощущения просто супер!</p>
<p>Решил начать с <strong class="text-yellow-300">Python</strong>, потому что много слышал, что он отлично подходит для новичков. И правда, синтаксис показался довольно понятным.</p>
<pre class="bg-gray-950 rounded-lg p-4 overflow-x-auto my-4">
<code class="language-python text-sm">print("Hello, World!")</code>
</pre>
<p>Конечно, это только самое начало. Впереди еще много всего интересного: переменные, циклы, функции... Уже не терпится разобраться!</p>
<p>Планирую изучать:</p>
<ul class="list-disc list-inside space-y-1 my-4 ml-4">
<li>Основы Python</li>
<li>HTML и CSS для создания веб-страничек</li>
<li>Может быть, немного JavaScript</li>
</ul>
<p>Буду делиться своими успехами здесь в блоге!</p>
`, 
      date: '2024-07-20',
      type: 'text',
    },
    {
      id: 'cool-video',
      title: 'Топ 5 игр с крутой графикой [Видео]',
      excerpt: 'Сделал подборку моих любимых игр с самой реалистичной графикой. Зацените видео!',
      // Убираем iframe из основного контента
      content: `
<p>Всем привет! Решил поделиться подборкой игр, которые меня просто поразили своей графикой. Настоящий некстген!</p>
<p>Смотрите видео ниже:</p>
<p>А какие игры с крутой графикой нравятся вам? Пишите в комментариях (когда они появятся 😉).</p>
`, 
      date: '2024-07-19',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Оставляем URL видео здесь
    },
    {
      id: 'python-basics',
      title: 'Изучаем Python: Переменные и типы данных',
      excerpt: 'Начал разбираться с Python. Делюсь первыми шагами: что такое переменные, какие бывают типы данных и как с ними работать.',
      content: `
<p>Продолжаю погружаться в <strong class="text-yellow-300">Python</strong>. Сегодня разбирался с базовыми вещами - переменными и типами данных.</p>
<p>Оказывается, переменная - это как коробочка, в которую можно положить какое-то значение (число, текст и т.д.).</p>
<pre class="bg-gray-950 rounded-lg p-4 overflow-x-auto my-4">
<code class="language-python text-sm">
# Пример создания переменных
message = "Привет, Python!" # Строка (str)
count = 10                 # Целое число (int)
price = 19.99              # Число с плавающей точкой (float)
is_active = True           # Булево значение (bool)

print(message)
print(count * 2)
</code>
</pre>
<p>Основные типы данных, которые я пока узнал:</p>
<ul class="list-disc list-inside space-y-1 my-4 ml-4">
<li><code class="bg-gray-700 px-1 rounded text-sm">int</code>: целые числа (1, 100, -5)</li>
<li><code class="bg-gray-700 px-1 rounded text-sm">float</code>: числа с десятичной точкой (3.14, -0.5)</li>
<li><code class="bg-gray-700 px-1 rounded text-sm">str</code>: строки текста ("Привет", 'Python')</li>
<li><code class="bg-gray-700 px-1 rounded text-sm">bool</code>: логические значения (True, False)</li>
</ul>
<p>Постепенно начинает вырисовываться общая картина. Двигаюсь дальше!</p>
`, 
      date: '2024-07-18',
      type: 'text',
    },
     {
      id: 'future-tech',
      title: 'Технологии будущего: Летающие машины и AI?',
      excerpt: 'Посмотрел крутой ролик про технологии будущего. Как думаете, скоро ли у нас будут летающие машины и умные роботы-помощники?',
      content: `
<p>Залип на YouTube на ролик про то, каким может быть наше будущее благодаря технологиям. Это просто взрыв мозга!</p>
<p>Представьте себе: летающие такси, которые развозят нас по городу без пробок, роботы-помощники, которые делают всю скучную работу, и искусственный интеллект, который помогает нам решать сложнейшие задачи.</p>
<div class="my-4 p-4 border-l-4 border-cyan-500 bg-gray-800 rounded-r-lg">
  <p class="font-semibold text-cyan-300">Цитата из видео:</p>
  <blockquote class="italic text-gray-300 mt-2">
    "Грань между научной фантастикой и реальностью становится все тоньше с каждым днем."
  </blockquote>
</div>
<p>Конечно, до такого будущего еще далеко, но очень интересно наблюдать за развитием технологий. Особенно впечатляют успехи в области AI. Кажется, скоро нейросети смогут делать удивительные вещи.</p>
<p>А вы верите в летающие машины? Или считаете это просто фантастикой?</p>
`, 
      date: '2024-07-17',
      type: 'text',
    },
  ];
  const post = samplePosts.find((p) => p.id === id);

  if (!post) {
    return null; // Возвращаем null, если пост не найден
  }
  return post;
}

// Компонент для отображения видео
const VideoPlayer = ({ src }: { src: string }) => (
  <div className="aspect-w-16 aspect-h-9 my-6 shadow-lg rounded-lg overflow-hidden"> {/* Добавлен overflow-hidden */}
    <iframe 
      src={src} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
      className="w-full h-full" // Убрали rounded-lg отсюда, так как он теперь на родительском div
    ></iframe>
  </div>
);

// Отдельный компонент для отображения содержимого поста
const PostContent = ({ post }: { post: Post }) => {
  return (
    <article className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
      <header className="mb-6 md:mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-2">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400">
          Опубликовано: {new Date(post.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      {post.type === 'video' && post.videoUrl && (
        <VideoPlayer src={post.videoUrl} />
      )}

      <div 
        className="prose prose-invert prose-lg max-w-none 
                   prose-headings:text-cyan-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 
                   prose-strong:text-yellow-300 prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono 
                   prose-blockquote:border-l-cyan-500 prose-blockquote:text-gray-300 prose-li:marker:text-cyan-400 
                   prose-pre:bg-gray-950 prose-pre:rounded-lg prose-pre:p-4 prose-pre:shadow-inner"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />

      <footer className="mt-8 pt-6 border-t border-gray-700">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Назад к списку постов
        </Link>
      </footer>
    </article>
  );
}

// Основной компонент страницы
export default async function PostPage({ params }: { params: { id: string } }) {
  // Получаем ID из params
  const postId = params.id;
  
  // Загружаем данные поста
  const post = await getPostData(postId);

  // Проверяем, найден ли пост
  if (!post) {
    notFound(); // Показываем 404, если пост не найден
  }

  // Возвращаем компонент с контентом поста
  return <PostContent post={post} />;
}

// Функция для генерации метаданных страницы поста (опционально)
/*
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);
  if (!post) {
    return {
      title: 'Пост не найден',
    };
  }
  
  // Используем content если он есть, иначе excerpt для описания
  const descriptionContent = post.content || post.excerpt;
  
  return {
    title: `${post.title} | IT-Блог Юного Кодера`,
    description: descriptionContent.substring(0, 150).replace(/<[^>]*>/g, '') + '...', 
  };
}
*/

// Если вы используете статическую генерацию (SSG), вам может понадобиться generateStaticParams
// export async function generateStaticParams() {
//   // Получаем все ID постов
//   const posts = [...] // Загрузка всех ID
//   return posts.map((post) => ({
//     id: post.id,
//   }));
// } 