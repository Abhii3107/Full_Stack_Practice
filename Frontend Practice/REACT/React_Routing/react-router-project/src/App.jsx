
import './App.css'
import {createBrowserRouter ,
  RouterProvider,} from "react-router-dom";

  import Home from "./components/Home";
  import About from "./components/About";
  import Dashboard from "./components/Dashboard";
  import Navbar from './components/Navbar';
import Params from './components/Params';
import Courses from './components/Courses';
import Reports from './components/Reports';
import Notfound from './components/Notfound';


 

const router= createBrowserRouter(
  [
    {
      path:"/",
      element :
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
     {
      path:"/about",
      element :
      <div>
        <Navbar/>
        <About />
       </div>
    },
      
     {
      path:"/dashboard",
      element : 
       <div>
        <Navbar/>
        <Dashboard/>
       </div>,
       children:[
        {
          path:"courses",
          element:<Courses/>
        },
        {
        path: "Reports",
        element: <Reports/>
        },
       ]
    },
    {
      path:"/:id",  // query parameter
      element : 
       <div>
        <Navbar/>
        <Params/>
       </div>
    }
    ,
    {
      path:"*",
      // element:<div>Not found</div>
      element :<Notfound/>
    }
  ]
);

function App() {


  return (
    <>
   
    <RouterProvider router={router} />
    </>
  )
}

export default App
