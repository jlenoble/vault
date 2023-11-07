import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="h-screen w-full overflow-hidden">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>,
);
