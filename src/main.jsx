import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";

// Create Browser Router
// Root is essentially our splash page.
// Anytime your app throws an error while rendering, loading data, or performing data mutations, React Router will catch it and render the error element.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
