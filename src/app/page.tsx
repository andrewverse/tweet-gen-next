import React from "react";
import MainContent from "@/components/MainContent";
import Summary from "@/components/Summary";
import Header from "@/components/Header/Header";
import ClientWrapper from "@/components/ClientWrapper";

const apiKey = process.env.NEWS_API_KEY;

async function getNews(): Promise<NewsFetchResult> {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=ai&from=2024-02-07&to=2024-02-07&sortBy=popularity&apiKey=${apiKey}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch News API");
    }

    const data = await res.json();
    return { articles: data.articles as Article[], error: null };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { articles: [], error: message };
  }
}

const Home: React.FC = async () => {
  const { articles, error } = await getNews();

  if (error) {
    return (
      <div className='mx-auto p-8'>{`Failed to load articles. Error: ${error}`}</div>
    );
  }

  if (!articles.length) {
    return <div>No articles found</div>;
  }

  return (
    <main className=''>
      <ClientWrapper className='m-2'>
        <Header />
        <MainContent articles={articles} />
      </ClientWrapper>
    </main>
  );
};

export default Home;
