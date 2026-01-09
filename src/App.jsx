import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter , Router, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home'
import Details from './components/Details/Details'

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      {path:'/details/:id', element:<Details />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (<>
    <RouterProvider router={routers}/>
    </>
  )
}

export default App
