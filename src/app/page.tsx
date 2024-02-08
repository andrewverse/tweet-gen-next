import ArticlesList from "@/components/ArticlesList";

const apiKey = process.env.NEWS_API_KEY;

async function getNews() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=ai&from=2024-02-07&to=2024-02-07&sortBy=popularity&apiKey=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch News API");
  }
  const data = await res.json();
  return data.articles;
}

export default async function Home() {
  const articles: Article[] = (await getNews()) || [];

  return (
    <main className=''>
      <ArticlesList articles={articles} />
    </main>
  );
}
