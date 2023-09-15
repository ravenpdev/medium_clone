import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
import { Post } from '@types'
import TrendingCard from './TrendingCard'

type TrendingProps = {
  trendings: Post[]
}

export default function Trending({ trendings }: TrendingProps) {
  return (
    <section className="border-b border-gray-200 px-40 py-16">
      <div className="flex gap-2">
        <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" />
        <h3 className="font-semibold">Trending on Medium</h3>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {trendings.map((trending, index) => (
          <TrendingCard count={index + 1} post={trending} />
        ))}
      </div>
    </section>
  )
}
