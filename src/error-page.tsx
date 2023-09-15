import { isRouteErrorResponse, useRouteError } from 'react-router'

export default function ErrorPage() {
  const error = useRouteError()

  const errorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
      return error.message
    } else if (typeof error === 'string') {
      return error
    } else {
      return 'Unknown error'
    }
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{errorMessage(error)}</i>
      </p>
    </div>
  )
}
