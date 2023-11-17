import { Router, Route, RootRoute } from "@tanstack/react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ListingsPage from "./pages/Listings";
import ProductPage from "./pages/Product";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

// NOTE: @see https://tanstack.com/router/v1/docs/guide/routes

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const listingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/listings",
  component: ListingsPage,
});

/*const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile/$profileId",
  component: ProfilesPage,
});

const myProfileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});*/

const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/product",
  component: ProductPage,
});

/*const postRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts/$postId",
  component: PostPage,
});*/

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  listingsRoute,
  productRoute,
]);

export const router = new Router({ routeTree });

export default router;