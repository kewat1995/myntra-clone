import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/BagMain.jsx";
import Home from "./Routes/Home.jsx";
import itemStore from "./store/index.js";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Bag",
        element: <Bag />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={itemStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
