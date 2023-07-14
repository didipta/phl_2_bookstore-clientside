import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layout/Main";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<div>Home</div>
            },
        ]
    }
])