import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout } from './components/index.js'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPost from './pages/AllPost.jsx'
import Post from './pages/Post.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false} >
            <Login />
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false} >
            <Signup />
          </AuthLayout>)
      },
      {
        path:'/all-post',
        element:(
          <AuthLayout authentication={true} >
            {" "}
            <AllPost />
          </AuthLayout>)
      },
      {
        path:'/add-post',
        element:(
          <AuthLayout authentication={true} >
            {" "}
            <AddPost />
          </AuthLayout>)
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication={true} >
            {" "}
            <EditPost />
          </AuthLayout>)
      },
      {
        path:'/post/:slug',
        element:(
          
            <Post />
        )
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
