import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

// Create Browser Router
// We add an array of route objects. The first one should be the "root route". And in this case the root route also has an error handling route.
// IMPORTANT: Individual routes will render on a separate page. To render them inside another route, we must nest them as children routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root is essentially our splash page.
    errorElement: <ErrorPage />, // Anytime your app throws an error while rendering, loading data, or performing data mutations, React Router will catch it and render the error element.
    // Instead of rendering the Contacts component on it's own page (and individual layout) we add it in the "children" array property.
    // Do this in combination with the <Outlet /> component, to tell react router WHERE to render this within the parent.
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

// Render the "root route" we created above in Main.tsx
// All our other routes will render inside of this "route route". It serves as the root layout of the UI
// We will have nested layouts as we move along..
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
