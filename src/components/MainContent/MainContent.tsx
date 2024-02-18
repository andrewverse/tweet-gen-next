"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ArticlesList from "../Articles/ArticlesList";
import { useMutation } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import Summary from "@/components/MainContent/Summary";
import LoadingSpinner from "@/common/components/LoadingSpinner";

const sampleProfile ="A 25 year old software engineer who is interested in AI and machine learning."

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
  const fetchPrompt = async () => {
    const response = await getPrompt(selectedArticle.content, sampleProfile);
    return response.tweetDrafts;
  };

  const summary = useMutation({
    mutationFn: fetchPrompt,
    onSuccess: () => {},
  });

  const handleSubmitArticle = () => {
    summary.mutate();
  };
  return (
    <div className='flex flex-col gap-10'>
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
      {summary.isPending ? (
        <LoadingSpinner />
      ) : (
        <Summary summary={summary.data} />
      )}
    </div>
  );
};

export default MainContent;
