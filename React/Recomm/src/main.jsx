import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Test from './components/Test.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "mens",
//         element: <Mens/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='' element={"<h1>home</h1>"}/>
      <Route path='mens' element={<Test/>}/>
      <Route path='womens' element={<Test/>}/>
      <Route path='kids' element={<Test/>}/>
      <Route path='products' element={<Test/>}>
        <Route path=':productid' element={<Test/>}/>
      </Route>
      <Route path='cart' element={<Test/>}/>
      <Route path='login' element={<Test/>}/>
      <Route path='signup' element={<Test/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
