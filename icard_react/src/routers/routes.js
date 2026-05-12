import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [
    ...routesAdmin,  // Traemos todo lo de admin
    ...routesClient, // Traemos todo lo de cliente
    {
        path: "*", // En React Router v6, "*" atrapa cualquier ruta no definida
        layout: BasicLayout,
        component: Error404,
    },
];

export default routes;