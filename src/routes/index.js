import React from "react";

import async from "../components/Async";

import {
  Sliders,
} from "react-feather";
import Tos from "views/Tos";

// Home components
const Home = async(() => import("../pages/Home"));

const dashboardsRoutes = {
  id: "Home",
  path: "/",
  header: "Home",
  icon: <Sliders />,
  containsHome: true,
  component: Home
};

const termsRoutes = {
  id: "Ters and Service Statement",
  path: "/terms",
  header: "Terms and Service",
  icon: <Sliders />,
  containsHome: true,
  component: Tos
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  dashboardsRoutes,
  termsRoutes
];

// Routes using the Auth layout
export const authLayoutRoutes = [];

// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes
];
