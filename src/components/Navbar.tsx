import { Link } from 'react-router-dom'

type NavbarProps = {
  title: string
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <div className="fixed top-0 w-full border-b border-gray-900">
      <header className="flex h-20 items-center justify-between px-8 lg:px-48">
        <h1 className="text-2xl font-semibold">
          <Link to={'/'}>{title}</Link>
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 text-sm">
            <li>
              <Link to={'/about'}>Our story</Link>
            </li>
            <li>
              <Link to={'/membership'}>Membership</Link>
            </li>
            <li>
              <Link to={'/write'}>Write</Link>
            </li>
            <li>
              <Link to={'/login'}>Sign in</Link>
            </li>
            <li>
              <Link to={'/social/signin'}>Get Started</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
