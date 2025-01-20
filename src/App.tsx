import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./Components/RootLayout.tsx";
import { Field } from './Pages/Field.tsx';
import { Crop } from './Pages/Crop.tsx';
import { Staff } from './Pages/Staff.tsx';
import { Log } from './Pages/Log.tsx';
import { Equipment } from './Pages/Equipment.tsx';
import {Vehicle} from "./Pages/Vehicle.tsx";
import Login from "./Pages/Login.tsx";
import Register from './Pages/Register.tsx';
import {Dashboard} from "./Pages/Dashboard.tsx;
function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/field', element : <Field/>},
                { path : '/crop', element : <Crop/>},
                { path : '/staff', element : <Staff/>},
                { path : '/log', element : <Log/>},
                { path : '/vehicle', element : <Vehicle/>},
                { path : '/equipment', element : <Equipment/>},
                { path : '/login', element : <Login/>},
                { path : '/signup', element : <Register/>},
                { path : '/dashboard', element : <Dashboard/>},
        ]
        },
    ])

    return (
        <>
                <RouterProvider router={routes} />

        </>
    )
}

export default App