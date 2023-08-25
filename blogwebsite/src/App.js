import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import UsersBlog from "./pages/UsersBlog";
import Write from "./pages/Write";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Tags from './pages/Tags';
import EditPost from './pages/EditPost';


const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <BlogPost />
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/blog/:username",
        element: <UsersBlog />
      },
      {
        path: "/tagsearch",
        element: <Tags />
      },
      {
        path: "/editpost",
        element: <EditPost />,
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);




function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

/* 
website needs: about page, login page, scroll of blogs to read based on being logged in, a tag search page, your blog page, and a settings page


design stuff: ogma -- from Celtic mythological creator of speech and eloquence
sunny theme -- maybe sunset so I can include purple


POST for login

*/
