import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/index.css'
import ErrorPage from '@/error-page'
import Root from '@routes/root'
import Login from '@routes/login'
import { Provider } from 'react-redux'
import { store } from '@store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
    // children: [
    //   {
    //     path: 'login',
    //     element: <Login />
    //   }
    // ]
  },
  {
    path: 'login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
