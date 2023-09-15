import { Button, Input } from '@components'

export default function Login() {
  return (
    <>
      <form className="mx-auto max-w-sm space-y-4">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />

        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </form>
    </>
  )
}
