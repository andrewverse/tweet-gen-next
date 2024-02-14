"use client";
import React, { useState } from "react";
import Summary from "@/components/Summary";
import { Button } from "@/components/ui/button";
import ArticlesList from "./Articles/ArticlesList";

const sampleProfile =
  "A 25 year old software engineer who is interested in AI and machine learning.";

async function getPrompt(article: string, profile: string) {
  const req = await fetch("http://localhost:8000/process-article", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ article: article, user_profile: profile }),
  });
  return req.json();
}

const MainContent = ({ articles }: { articles: Article }) => {
  const [summary, setSummary] = useState<string>("");

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  console.log(selectedArticle);

  const handleSubmitArticle = () => {
    const fetchPrompt = async () => {
      const response = await getPrompt(selectedArticle.content, sampleProfile);
      setSummary(response.tweetDrafts);
    };

    fetchPrompt();
  };
  return (
    <div>
      <ArticlesList
        articles={articles}
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
      />
      <Button onClick={handleSubmitArticle} variant='outline'>
        Button
      </Button>
      <Summary summary={summary} />
    </div>
  );
};

export default MainContent;
