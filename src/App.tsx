import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import UpHeader from "./components/header/UpHeader";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import SignUp from './pages/auth/SignUp';
import NotFound from "./pages/not-found/NotFound";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/Account";
import ProductDetails from "./pages/product-details/ProductDetails";
import CheckOut from "./pages/check-out/CheckOut";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "contact", 
        element: <Contact />,
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "account/:id",
        element: <Account />,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function Layout() {
  return (
    <div>
      <UpHeader />
      <Header />
      <div className="content">
        {/* Outlet سيعرض المحتوى بناءً على المسار */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
