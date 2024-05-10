import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './pages/Home.jsx'
import ADDpost from "./pages/ADDpost";
import Signup from './pages/Signup'
import Editpost from "./pages/Editpost";

import Post from "./pages/Post";

import Allposts from "./pages/Allposts";

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login} from './components/index.js'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/login",
        element:(<AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>)
      }
      ,
  {
    path:'/signup',
    element:(<AuthLayout authentication={false}>
      <Signup/>
      </AuthLayout>)
  },
    
  
  {
    path:"/all-post",
    element:(
      <AuthLayout authentication>
        {''}
        <Allposts/>
      </AuthLayout>
    ),

  },
  {
    path:"/add-post",
    element:(
      <AuthLayout authentication>
        {""}
        <ADDpost/>
      </AuthLayout>
    )
  },{
    path:'/edit-post/:slug',
    element:(
      <AuthLayout authentication>
        {""}
        <Editpost/>
      </AuthLayout>
    )
  },{
    path:"/post/:slug",
    element:<Post/>
  },
]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
