import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Create Browser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
]);

// Render the "root route" we created above in Main.tsx
// All our other routes will render inside of this "route route". It serves as the root layout of the UI
// We will have nested layouts as we move along..
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
