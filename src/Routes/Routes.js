import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import HomePage from "../components/HomePage";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<HomePage></HomePage>,
    },
    {
        path:'/project1',
        element:<Project1></Project1>
    },
    {
        path:'/project2',
        element:<Project2></Project2>
    },
    {
        path:'/project3',
        element:<Project3></Project3>
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    }
])
export default routes;