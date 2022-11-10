import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blog/Blogs";
import ViewDetails from "../../Pages/Details/ViewDetails";
import Home from "../../Pages/Home/Home/Home";
import AllService from "../../Pages/Home/Service/AllService";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/Review/MyReview";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
     {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path: '/',
                element : <Home></Home>
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
                path : '/blog',
                element : <Blogs></Blogs>
            },
            {
                path : '/allService',
                element: <AllService></AllService>
            },
            {
                path : '/detail/:id',
                element : <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path : '/review/:id',
                element : <Review></Review>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/review',
                element: <MyReview></MyReview>
            }
        ]
     },

     {
        path: '*',
        element: <div className='text-center text-4xl text-warning m-56 pt-8'>
            <h3> Ops!! Page Not found: 4o4</h3> <p>You provide wrong link .</p>
        </div>
    }
])


export default router;