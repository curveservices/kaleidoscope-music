import { Suspense } from "react";

import LoadingSpinner from "./components/loadingSpinner/index.jsx";

import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("./layout/main/index.jsx"));
const NotFound = lazy(() => import("./pages/404/index.jsx"));
const Home = lazy(() => import("./pages/home/index.jsx"));
const About = lazy(() => import("./pages/about/index.jsx"));
const Groups = lazy(() => import("./pages/groups/index.jsx"));
const Events = lazy(() => import("./pages/events/index.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/groups"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Groups />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Events/>
            </Suspense>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
