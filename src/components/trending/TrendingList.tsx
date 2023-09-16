import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
import TrendingCard from './TrendingCard'
import { IArticle } from '@api/types'

type TrendingListProps = {
  articles: IArticle[]
}

export default function TrendingList({ articles }: TrendingListProps) {
  return (
    <section className="border-b border-gray-200 px-8 py-10 lg:px-48">
      <div className="flex gap-2">
        <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" />
        <h3 className="font-semibold">Trending on Medium</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {articles.map((article, index) => (
          <TrendingCard key={article._id} count={index + 1} article={article} />
        ))}
      </div>
    </section>
  )
}
