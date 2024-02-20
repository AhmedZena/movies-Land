import Login from "./Pages/Auth/Login";
import Navbar from "./components/Navbar";
import AppLayout from "./ApppLayout";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Login from "./components/Auth/Login";
import Register from "./Pages//Auth/Register";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import Values from "./Pages/AboutUs/Values";
import Visions from "./Pages/AboutUs/Visions";
import Movies from "./Pages/Movies";
import Movie, { movieLoader } from "./Pages/Movie";
import { contactAction } from "./Pages/ContactUs";
import Error from "./Pages/Error";
import Loading from "./components/Loading";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const ContactUs = lazy(() => import("./Pages/ContactUs"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactUs />
          </Suspense>
        ),
        action: contactAction,
      },

      {
        path: "/about",
        element: <AboutUs />,
        children: [
          { path: "visions", element: <Visions /> },
          { path: "values", element: <Values /> },
        ],
      },
      // movies
      { path: "/movies", element: <Movies /> },
      {
        path: "/movie/:id",
        loader: movieLoader,
        element: <Movie />,
        errorElement: <Error />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
