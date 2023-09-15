import { SparklesIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { Post } from '@types'

type PostsListProps = {
  posts: Post[]
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <section>
      {posts.map((post) => (
        <div className="mb-4 flex w-full justify-between gap-16" key={post.title}>
          <div className="w-full">
            <div className="flex items-center gap-2 font-medium">
              <img className="rounded-md" src={post.user.img_url} alt="user_image" />
              <span className="text-sm">{post.user.username}</span>
            </div>
            <div>
              <p className="text-lg font-bold">{post.title}</p>
              <p className="font-light">{post.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-sm font-light text-gray-500">
                <span>{post.created_at}</span>
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
            <img src={post.imge_url} alt="post_image" />
          </div>
        </div>
      ))}
    </section>
  )
}
