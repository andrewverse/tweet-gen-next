import ArticlesList from "@/components/ArticlesList";
import { useState } from "react";

const apiKey = process.env.NEWS_API_KEY;

export default async function Home() {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
  ).then((response) => response.json());

  const articles: Article[] = newsData?.articles;

  return (
    <main className=''>
      <ArticlesList articles={articles} />
    </main>
  );
}
