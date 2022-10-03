import Link from 'next/link';

const NewsPage = () => {
  return (
    <div>
      <h1>news page</h1>
      <h2>
        <Link href="/news/important-news">Something important</Link>
      </h2>
      <h2>
        <Link href="/news/news-headlines">news headlines</Link>
      </h2>
    </div>
  );
};

export default NewsPage;
