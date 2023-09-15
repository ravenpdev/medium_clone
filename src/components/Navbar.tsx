import { Link } from 'react-router-dom'

type NavbarProps = {
  title: string
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <div className="border-b border-gray-900">
      <header className="flex items-center justify-between px-40 py-4">
        <h1 className="text-2xl font-semibold">
          <Link to={'/'}>{title}</Link>
        </h1>
        <nav>
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
