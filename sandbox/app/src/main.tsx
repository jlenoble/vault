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
        {/* Full screen non-scrollable column (expecting first element to be a header).
         * Scrolling will be handled in sidebars and main content area.*/}
        <div className="flex h-screen w-full flex-col overflow-hidden bg-gray-200 dark:bg-gray-800">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>,
);
