import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import Message from "./menssage";
import Aside from "./aside";
import Main from "./main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Single from './single';
import Basic from './layout/basic';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="row">
                        <div className="col-md-6">
                            <Main></Main>
                            <Message></Message>
                        </div>
                        <div className="col-md-3">
                            {/* Aquí se aplica el tipo de letra 'Berlin Sans FB Demi' */}
                            <h2 style={{ fontFamily: 'Copperplate Gothic Light' }}>RELLENE EL FORMULARIO DE INFORMACIÓN</h2>
                            <Aside></Aside>
                        </div>
                    </div>
                </>
            },
            {
                path: "/detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
