import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NavbarResponsive from './components/NavbarResponsive'
import ResponsiveDesign from './components/ResponsiveDesign'
import AddBookPage from './pages/addBook'
import DeletePage from './pages/delete'
import BookListPage from './pages/bookList'
import BookDetailsPage from './pages/bookDetails'
import UpdateDetailsPage from './pages/updateDetails'



function App() {

  const router = createBrowserRouter([
    {
      path: "/", // forward slash indicates home page...
      element: <BookListPage />
    },
    {
      path: "/add-new",
      element: <AddBookPage />
    },
    {
      path: "/update",
      element: <UpdateDetailsPage />
    },
    {
      path: "/delete",
      element: <DeletePage />
    },
    {
      path: "/books/:id", // colon here is used to create DYNAMIC ROUTE to show different details at a specific time...
      element: <BookDetailsPage />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
      <NavbarResponsive />
      {/* <Hero /> */}
      {/* <ResponsiveDesign /> */}
    </div>
  )
}

export default App
