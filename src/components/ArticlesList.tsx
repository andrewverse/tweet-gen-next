import Article from "./Article";

export default function ArticlesList({ articles }: { articles: Article[] }) {
  return (
    <div>
      {articles.map((article: Article) => (
        <Article key={article.publishedAt} article={article} />
      ))}
    </div>
  );
}
