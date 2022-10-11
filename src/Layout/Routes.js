import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import Chart from "../component/Chart";
import ErrorPage from "../component/ErrorPage";
import Home from "../component/Home";
import Quiz from "../component/Quiz";
import Root from "../component/Root";
import About from '../component/About';


export const router = createBrowserRouter([
    {
        path: '/',
        loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/', 
                element: <Home />,
            },
            {
                path: 'quiz/:qId',
                element: <Quiz />,
                loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.qId}`)
            },
            {
              path: 'statics'  ,
              element: <Chart />
            },
            { 
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }
])
// const router = createBrowserRouter([
//     {path: '/', element: <Root></Root>},
//     {path: '/blog', element: <Blog></Blog>}
//   ])