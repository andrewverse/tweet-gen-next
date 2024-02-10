"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dispatch, SetStateAction, useState } from "react";

// export default function Article({ article }: { article: Article }) {
//   return (
//     <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5'>
//       <div className='md:flex'>
//         <div className='p-8'>
//           <h2 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
//             {article.title}
//           </h2>
//           <p className='mt-2 text-gray-500'>{article.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Article({
  article,
  setSelectedArticles,
  selectedArticles,
}: {
  article: Article;
  setSelectedArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  selectedArticles: Article[];
}) {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectedArticle = () => {
    const articleIndex = selectedArticles?.findIndex(
      (selectedArticle) => selectedArticle.publishedAt === article.publishedAt
    );

    setIsSelected(!isSelected);

    if (articleIndex < 0) {
      setSelectedArticles([...selectedArticles, article]);
    } else {
      const newSelectedArticles = [...selectedArticles];
      newSelectedArticles.splice(articleIndex, 1);
      setSelectedArticles(newSelectedArticles);
    }
  };

  return (
    <Card
      className={`max-w-xl mx-auto my-8 hover:bg-gray-200 ${
        isSelected && "bg-gray-200"
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
