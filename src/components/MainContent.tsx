"use client";
import React, { useState } from "react";
import Summary from "@/components/Summary";
import ArticlesList from "@/components/ArticlesList";

const MainContent = ({ articles }: { articles: Article[] }) => {
  const [selectedArticles, setSelectedArticles] = useState<Article[]>([]);
  return (
    <div>
      <ArticlesList
        articles={articles}
        selectedArticles={selectedArticles}
        setSelectedArticles={setSelectedArticles}
      />
    </div>
  );
};

export default MainContent;
