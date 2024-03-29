import React from "react";

import Header from "@/components/Header/Header";
import MainContent from "@/components/MainContent/MainContent";
import ClientWrapper from "@/components/ClientWrapper";

const apiKey = process.env.NEWS_API_KEY;

async function getNews(): Promise<NewsFetchResult> {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=ai&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=${apiKey}`
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
