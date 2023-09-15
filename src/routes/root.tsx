import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import Trending from '@components/trending/Trending'
import { Post } from '@types'

const trendings: Post[] = [
  {
    user: {
      img_url: 'https://picsum.photos/24/24',
      username: 'Victor Timi in Level Up Coding'
    },
    post: {
      title: '"Good Commit" vs "Your Commit": How to Write a Perfect Git Commit Message'
    },
    created_at: 'Sept 2',
    minsToRead: 8,
    memberOnly: true
  },
  {
    user: {
      img_url: 'https://picsum.photos/24/24',
      username: 'Nick Hilton'
    },
    post: {
      title: 'The End of the Subscription Era is Comming'
    },
    created_at: 'Aug 30',
    minsToRead: 10,
    memberOnly: false
  },
  {
    user: {
      img_url: 'https://picsum.photos/24/24',
      username: 'The Bold Italic'
    },
    post: {
      title: "Why I'm breaking up with Burning Man"
    },
    created_at: 'Aug 24',
    minsToRead: 7,
    memberOnly: true
  },
  {
    user: {
      img_url: 'https://picsum.photos/24/24',
      username: 'AL Anany'
    },
    post: {
      title: 'The ChatGPT Hype is Over - Now Watch How Google Will Kill ChatGPT.'
    },
    created_at: 'Sept 2',
    minsToRead: 6,
    memberOnly: false
  },
  {
    user: {
      img_url: 'https://picsum.photos/24/24',
      username: 'Carlyn Beccia'
    },
    post: {
      title: 'I went to a Bumble IRL Event and Finally Understood Why Modern Dating is a Mess'
    },
    created_at: 'Sept 7',
    minsToRead: 7,
    memberOnly: true
  },
  {
    user: {
      img_url: 'https://picsum.photos/24/24',
      username: 'Admiral Cloudberg'
    },
    post: {
      title: "The Dead Man's Gambit: The crash of Ethopian Airlines flight 961"
    },
    created_at: 'Sept 10',
    minsToRead: 35,
    memberOnly: false
  }
]

export default function Root() {
  return (
    <>
      <div className="text-gray-900 antialiased">
        <Navbar title="Medium Clone" />
        <Hero />

        <main>
          <Trending trendings={trendings} />
        </main>
      </div>
    </>
  )
}
