"use client";
import React, { useState } from "react";
import Summary from "@/components/Summary";
import ArticlesList from "@/components/ArticlesList";

const MainContent = ({ articles }: { articles: Article[] }) => {
  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);
  // TODO: FIX SUMMARY COMPONENT

  return (
    <div>
      <ArticlesList
        articles={articles}
        selectedArticles={selectedArticles}
        setSelectedArticles={setSelectedArticles}
      />
      {/* <Summary selectedArticles={selectedArticles} /> */}
    </div>
  );
};

export default MainContent;
