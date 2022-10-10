import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import ErrorPage from "../component/ErrorPage";
import Home from "../component/Home";
import Root from "../component/Root";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {path: '/', element: <Home></Home>},
            {path: 'home', element: <Home></Home>},
            {path: 'blog', element: <Blog></Blog>}
            
            // {path: 'statics', element: }
        ]
    }
])
// const router = createBrowserRouter([
//     {path: '/', element: <Root></Root>},
//     {path: '/blog', element: <Blog></Blog>}
//   ])