import { IArticle } from '@api/types'
import { Hero } from '@components'
import ArticlesList from '@components/articles/ArticlesList'
import TrendingList from '@components/trending/TrendingList'

const articles: IArticle[] = [
  {
    _id: '1',
    user: {
      imgUrl: 'https://picsum.photos/24/24',
      username: 'Victor Timi in Level Up Coding'
    },
    title: '"Gord Commit" vs "Your Commit": How to Write a Perfect Git Commit Message',
    description:
      'A good commit shows whether a developer is a good collaborator — Peter Hutterer, Linux.',
    imgUrl: 'https://picsum.photos/250/150',
    createdAt: 'Sept 2',
    minsToRead: 8,
    memberOnly: true
  },
  {
    _id: '2',
    user: {
      imgUrl: 'https://picsum.photos/24/24',
      username: 'Nick Hilton'
    },
    title: 'The End of the Subscription Era is Comming',
    description: 'This piece exists thanks to the munificence of my paying newsletter subscribers.',
    imgUrl: 'https://picsum.photos/250/150',
    createdAt: 'Aug 30',
    minsToRead: 10,
    memberOnly: false
  },
  {
    _id: '3',
    user: {
      imgUrl: 'https://picsum.photos/24/24',
      username: 'The Bold Italic'
    },
    title: "Why I'm breaking up with Burning Man",
    description:
      'Adriana Roberts is a well-known burner who has gone for 30 years and needs to quit the playa. This is why.',
    imgUrl: 'https://picsum.photos/250/150',
    createdAt: 'Aug 24',
    minsToRead: 7,
    memberOnly: true
  },
  {
    _id: '4',
    user: {
      imgUrl: 'https://picsum.photos/24/24',
      username: 'AL Anany'
    },
    title: 'The ChatGPT Hype is Over - Now Watch How Google Will Kill ChatGPT.',
    description: 'It never happens instantly. The business game is longer than you know.',
    imgUrl: 'https://picsum.photos/250/150',
    createdAt: 'Sept 2',
    minsToRead: 6,
    memberOnly: false
  },
  {
    _id: '5',
    user: {
      imgUrl: 'https://picsum.photos/24/24',
      username: 'Carlyn Beccia'
    },
    title: 'I went to a Bumble IRL Event and Finally Understood Why Modern Dating is a Mess',
    description:
      'I interviewed over 50 single people and asked them about their biggest struggles in modern dating. Men and women had very different responses.',
    imgUrl: 'https://picsum.photos/250/150',
    createdAt: 'Sept 7',
    minsToRead: 7,
    memberOnly: true
  },
  {
    _id: '6',
    user: {
      imgUrl: 'https://picsum.photos/24/24',
      username: 'Admiral Cloudberg'
    },
    title: "The Dead Man's Gambit: The crash of Ethopian Airlines flight 961",
    description:
      'On the 23rd of November 1996, three men stormed the cockpit of an Ethiopian Airlines Boeing 767.',
    imgUrl: 'https://picsum.photos/250/150',
    createdAt: 'Sept 10',
    minsToRead: 35,
    memberOnly: false
  }
]

const topics = [
  'programming',
  'data science',
  'technology',
  'self improvement',
  'writing',
  'relationships',
  'machine learning',
  'productivity',
  'politics'
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section>
        <TrendingList articles={articles} />

        <div className="flex justify-between gap-16 px-8 py-16 lg:px-48">
          <ArticlesList posts={articles} />

          <div className="hidden lg:block lg:w-full lg:max-w-sm">
            <h4 className="font-semibold">Discover more of what matters to you</h4>

            <div className="mt-4 flex flex-wrap gap-3">
              {topics.map((topic, index) => (
                <button
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-sm capitalize"
                  key={index}
                >
                  {topic}
                </button>
              ))}
            </div>

            <a className="mt-4 inline-block text-sm text-green-500" href="">
              See more topics
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
