import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/common/Header";
import Body from "./components/home/Body";
import Footer from "./components/common/Footer";
import Error from "./components/error/Error";
import RestaurantMenu from "./components/menu/RestaurantMenu";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
import Contact from "./components/common/Contact";
import About from "./components/common/About";
import OrderSuccess from "./components/order/OrderSuccess";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import OrderDetails from "./components/order/OrderDetails";
import LandingPage from "./components/home/LandingPage";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer autoClose={2000} />
      </Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart/ordersuccess",
        element: <OrderSuccess />,
      },
      {
        path: "/cart/ordersuccess/orderdetails",
        element: <OrderDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
