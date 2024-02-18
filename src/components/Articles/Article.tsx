"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dispatch, SetStateAction, useState } from "react";

export default function Article({
  article,
  setSelectedArticle,
  selectedArticle,
}: {
  article: Article;
  setSelectedArticle: React.Dispatch<React.SetStateAction<Article | null>>;
  selectedArticle: Article | null;
}) {
  const [isSelected, setIsSelected] = useState(false);

  const isArticleSelected =
    selectedArticle?.publishedAt === article.publishedAt;

  const handleSelectedArticle = () => {
    setIsSelected(!isSelected);
    if (isArticleSelected) {
      setSelectedArticle(null);
    } else {
      setSelectedArticle(article);
    }
  };

  return (
    <Card
      className={`mx-auto my-2 hover:bg-accent ${
        isArticleSelected && "bg-accent"
      } cursor-pointer`}
      onClick={handleSelectedArticle}
    >
      <CardHeader>
        <CardTitle className=''>{article.title}</CardTitle>
        <CardDescription className='text-gray-400'>
          {article.source.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='mt-2 '>{article.content}</p>
      </CardContent>
    </Card>
  );
}
