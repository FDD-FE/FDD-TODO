import {createBrowserRouter} from "react-router-dom";
import {TodoContainer} from "../pages";
import App from "../App";

export const router = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <App/>
        },
        {
            path: '/todo',
            element: <TodoContainer/>,
        }
    ])
}
