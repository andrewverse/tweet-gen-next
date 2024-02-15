"use client";
import React, { useState } from "react";
import Summary from "@/components/Summary";
import { Button } from "@/components/ui/button";
import ArticlesList from "./Articles/ArticlesList";
import { useMutation } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";

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
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  console.log(selectedArticle);

  const fetchPrompt = async () => {
    const response = await getPrompt(selectedArticle.content, sampleProfile);
    return response.tweetDrafts;
  };

  const {
    data: summary,
    error,
    isPending,
    mutate,
  } = useMutation({
    mutationFn: () => fetchPrompt(),
    onSuccess: () => {},
  });

  const handleSubmitArticle = () => {
    // Use the mutate function from useMutation to start the mutation
    mutate();
  };
  return (
    <div className='flex flex-col gap-14'>
      <ArticlesList
        articles={articles}
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
      />
      <Button
        onClick={handleSubmitArticle}
        variant='outline'
        className='w-full bg-sky-300'
      >
        Summerize This Article
      </Button>
      {isPending ? (
        <div className='flex items-center justify-center text-2xl'>
          <FaSpinner className='animate-spin mr-2' />
          <span>Loading...</span>
        </div>
      ) : (
        <Summary summary={summary} />
      )}
    </div>
  );
};

export default MainContent;
