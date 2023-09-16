// import { Button, Input } from '@components'
import { Button } from '@components'
import { useLoginMutation } from '@services/authService'
// import { login, logout } from '@store/slice/authSlice'
// import { RootState } from '@store/store'
// import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  // const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  const handleLogin = async () => {
    try {
      const result = await login({
        email: 'ravenp.dev@gmail.com',
        password: '$up3r$tr0ngP@ssw0rd'
      })

      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Button disabled={isLoading} onClick={handleLogin}>
      Login
    </Button>
  )

  // return (
  //   <>
  //     <form className="mx-auto max-w-sm space-y-4">
  //       <Input type="email" name="email" placeholder="Email" />
  //       <Input type="password" name="password" placeholder="Password" />
  //
  //       <Button
  //         type="button"
  //         onClick={() => dispatch(login({ email: 'ravenpdev@gmail.com', password: 'password' }))}
  //         fullWidth
  //       >
  //         Sign in
  //       </Button>
  //
  //       {isLoggedIn && <Button onClick={() => dispatch(logout())}>Logout</Button>}
  //     </form>
  //   </>
  // )
}
