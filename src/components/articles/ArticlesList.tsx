import { IArticle } from '@api/types'
import { SparklesIcon, BookmarkIcon } from '@heroicons/react/24/outline'

type ArticlesListProps = {
  posts: IArticle[]
}

export default function ArticlesList({ posts }: ArticlesListProps) {
  return (
    <section>
      {posts.map((post) => (
        <div className="mb-4 flex w-full justify-between gap-16" key={post.title}>
          <div className="w-full">
            <div className="flex items-center gap-2 font-medium">
              <img className="rounded-md" src={post.user.imgUrl} alt="user_image" />
              <span className="text-sm">{post.user.username}</span>
            </div>
            <div>
              <p className="text-lg font-bold">{post.title}</p>
              <p className="font-light">{post.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-sm font-light text-gray-500">
                <span>{post.createdAt}</span>
                <span>-</span>
                <span>{post.minsToRead} min read</span>
                {post.memberOnly && <SparklesIcon className="h-4 w-4 text-yellow-500" />}
              </div>
              <span>
                <BookmarkIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
          <div>
            <img src={post.imgUrl} alt="post_image" />
          </div>
        </div>
      ))}
    </section>
  )
}
