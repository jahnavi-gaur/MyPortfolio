import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home /> //Hero TechStack FeaturedProjects
      },
      {
        path: "/about",
        element: <About /> //AboutContent
      },
      {
        path: "/projects",
        element: <Projects /> //Project Grid
      },
      {
        path: "/contact",
        element: <Contact /> //Contat Form
      },
    ]
  }
])