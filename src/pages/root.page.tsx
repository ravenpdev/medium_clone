import { Outlet } from 'react-router-dom'
import { Navbar } from '@components'
import { ToastContainer } from 'react-toastify'
import { useMeQuery } from '@api/users.api'
import { setUser } from '@store/slice/currentUserSlice'

const RootPage = () => {
  const { data } = useMeQuery(null)
  setUser(data ?? null)

  return (
    <div className="text-gray-900 antialiased">
      <Navbar title="Medium Clone" />

      <main className="mt-20">
        <ToastContainer />
        <Outlet />
      </main>
    </div>
  )
}

export default RootPage
