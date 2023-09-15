import { SparklesIcon } from '@heroicons/react/24/solid'
import { Post } from '@types'

type TrendingCardProps = {
  count: number
  post: Post
}

export default function TrendingCard({ count, post }: TrendingCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div>
        <span className="text-3xl font-semibold text-gray-200">{count}</span>
      </div>
      <div className="space-y-2 py-1.5">
        <div className="flex items-center gap-2 font-medium">
          <img className="rounded-md" src={post.user.img_url} alt="user_image" />
          <span className="text-sm">{post.user.username}</span>
        </div>
        <p className="font-bold">{post.title}</p>
        <div className="flex gap-2 text-sm font-light text-gray-500">
          <span>{post.created_at}</span>
          <span>-</span>
          <span>{post.minsToRead} min read</span>
          {post.memberOnly && <SparklesIcon className="h-4 w-4 text-yellow-500" />}
        </div>
      </div>
    </div>
  )
}
