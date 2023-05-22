import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            
            {
                path:'/blogs',
                element: <Home/>
            },
            
            {
                path:'/add-blogs',
                element: <Add/>
            },
            {
                path:'/blogs/:id',
                element: <Detail/>
            },
            {
                path:'/blogs/edit/:id',
                element: <Edit/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
]