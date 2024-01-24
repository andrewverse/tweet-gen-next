export default function Article({ article }: { article: Article }) {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5'>
      <div className='md:flex'>
        <div className='p-8'>
          <h2 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            {article.title}
          </h2>
          <p className='mt-2 text-gray-500'>{article.content}</p>
        </div>
      </div>
    </div>
  );
}
