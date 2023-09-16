import { useLogoutMutation } from '@api/auth.api'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from '@store/hooks'
import { selectCurrentUser } from '@store/slice/currentUserSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

type NavbarProps = {
  title: string
}

export const Navbar = ({ title }: NavbarProps) => {
  const currentUser = useAppSelector(selectCurrentUser)

  const [logoutUser, { isLoading, isSuccess }] = useLogoutMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('User successfully logout')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <div className="fixed top-0 w-full border-b border-gray-900">
      <header className="flex h-20 items-center justify-between px-8 lg:px-48">
        <h1 className="text-2xl font-semibold">
          <Link to={'/'}>{title}</Link>
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 text-sm">
            {!currentUser && (
              <>
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
              </>
            )}
            {currentUser && (
              <>
                <li>
                  <Link className="flex items-center gap-2 hover:underline" to={'new-story'}>
                    <PencilSquareIcon className="h-6 w-6" />
                    Write
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  )
}
