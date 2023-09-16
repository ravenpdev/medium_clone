import { useLoginMutation } from '@api/auth.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TypeOf, object, string } from 'zod'
import { toast } from 'react-toastify'

const loginSchema = object({
  email: string().min(1, 'Email address is required').email('Email address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters')
})

export type LoginInput = TypeOf<typeof loginSchema>

export default function LoginPage() {
  // API Login mutation
  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginMutation()

  const navigate = useNavigate()
  const location = useLocation()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const from = ((location.state as any)?.from.pathname as string) || '/'

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful }
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success('User login successfully')
      navigate(from)
    }

    if (isError) {
      toast.error('Something went wrong')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful])

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values)
  }

  return (
    <section className="mx-auto max-w-md py-40">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          className="w-full border border-gray-200 p-2"
          type="email"
          defaultValue=""
          placeholder="Email"
          {...register('email')}
        />
        <input
          className="w-full border border-gray-200 p-2"
          type="password"
          defaultValue=""
          placeholder="Password"
          {...register('password')}
        />

        <button className="bg-blue-500 px-3 py-1.5 text-white" type="submit">
          {isLoading ? 'Submitting' : 'Submit'}
        </button>
      </form>

      <div className="mt-8">
        <span className="text-sm">
          Don't have an account?{' '}
          <Link className="text-green-500" to={'/register'}>
            Register now
          </Link>
        </span>
      </div>

      <div className="mt-8 border-t border-gray-100 py-4"></div>
    </section>
  )
}
