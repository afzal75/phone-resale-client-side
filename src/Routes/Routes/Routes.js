import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import SingleCategoryProduct from "../../Pages/SingleCategoryProduct/SingleCategoryProduct";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'products/:id',
                element: <SingleCategoryProduct></SingleCategoryProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default router;