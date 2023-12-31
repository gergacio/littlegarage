import React from "react";
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
// import PrivateRoute from "./screens/PrivateRoute.jsx";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ShippingScreen from "./screens/shippingScreen.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<App />}
        >
            <Route
                index={true}
                path="/"
                element={<HomeScreen />}
            ></Route>

            <Route
                index={true}
                path="/product/:id"
                element={<ProductScreen />}
            ></Route>

            <Route
                index={true}
                path="/cart"
                element={<CartScreen />}
            ></Route>

            <Route
                index={true}
                path="/login"
                element={<LoginScreen />}
            ></Route>

            <Route
                index={true}
                path="/register"
                element={<RegisterScreen />}
            ></Route>

            <Route
                index={true}
                path="/shipping"
                element={<ShippingScreen />}
            ></Route>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
