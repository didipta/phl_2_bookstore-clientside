import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layout/Main";
import Home from "../component/Homepgae/Home";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/signin",
                element:<div>Sign in</div>
            }
        ]
    }
])