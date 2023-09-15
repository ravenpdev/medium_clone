import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
import { Post } from '@types'
import TrendingCard from './TrendingCard'

type TrendingListProps = {
  trendings: Post[]
}

export default function TrendingList({ trendings }: TrendingListProps) {
  return (
    <section className="border-b border-gray-200 px-8 py-10 lg:px-48">
      <div className="flex gap-2">
        <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" />
        <h3 className="font-semibold">Trending on Medium</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {trendings.map((trending, index) => (
          <TrendingCard count={index + 1} post={trending} />
        ))}
      </div>
    </section>
  )
}
