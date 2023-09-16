import { IArticle } from '@api/types'
import { SparklesIcon } from '@heroicons/react/24/solid'

type TrendingCardProps = {
  count: number
  article: IArticle
}

export default function TrendingCard({ count, article }: TrendingCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div>
        <span className="text-3xl font-semibold text-gray-200">{count}</span>
      </div>
      <div className="space-y-2 py-1.5">
        <div className="flex items-center gap-2 font-medium">
          <img className="rounded-md" src={article.user.imgUrl} alt="user_image" />
          <span className="text-sm">{article.user.username}</span>
        </div>
        <p className="font-bold">{article.title}</p>
        <div className="flex gap-2 text-sm font-light text-gray-500">
          <span>{article.createdAt}</span>
          <span>-</span>
          <span>{article.minsToRead} min read</span>
          {article.memberOnly && <SparklesIcon className="h-4 w-4 text-yellow-500" />}
        </div>
      </div>
    </div>
  )
}
