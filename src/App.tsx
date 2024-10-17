import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import UpHeader from "./components/header/UpHeader";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/not-found/NotFound";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/Account";
import ProductDetails from "./pages/product-details/ProductDetails";
import CheckOut from "./pages/check-out/CheckOut";
import Login from "./pages/auth/Login";
import WishList from "./pages/wish-list/WishList";
import Look from "./pages/look/Look";
import ProductByCategory from "./pages/product-by-category/ProductByCategory";
import { ThemeProvider } from "./lib/hooks/ThemeContext";

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
        element: <SignUp />,
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
        path: "category/:categoryId",
        element: <ProductByCategory />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
      {
        path: "look",
        element: <Look />,
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
    <ThemeProvider>
      {" "}
      {/* Ensure ThemeProvider wraps everything */}
      <UpHeader />
      <Header />
      <div className="content dark:bg-gray-800 dark:text-white">
        <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
