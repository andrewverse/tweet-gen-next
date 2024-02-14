"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Article from "./Article";

export default function ArticlesList({
  articles,
  selectedArticle,
  setSelectedArticle,
}: {
  articles: Article;
  selectedArticle: Article | null;
  setSelectedArticle: React.Dispatch<React.SetStateAction<Article | null>>;
}) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate the indices of the first and last items on the current page
  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  // Slice the articles array to get only the items for the current page
  const currentItems = articles?.slice(firstIndex, lastIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(articles?.length / itemsPerPage);

  const maxPageCount = pageCount < 11 ? pageCount : 10;

  // Handler for changing the page
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <div className='font-bold'>
        1. SELECT AN ARTICLE YOU WANT TO SUMMERIZE
      </div>
      <div className='md:flex gap-4'>
        {currentItems?.map((article: Article) => (
          <Article
            key={article.publishedAt}
            article={article}
            setSelectedArticle={setSelectedArticle}
            selectedArticle={selectedArticle}
          />
        ))}
      </div>
      <div className='flex justify-center items-center space-x-2 w-full'>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        {Array.from({ length: maxPageCount }, (_, index) => index + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              className={pageNum === page ? "text-blue-600" : ""}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
}
