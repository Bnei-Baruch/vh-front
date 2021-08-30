import React from "react";

import async from "../components/Async";

import {
  Sliders,
} from "react-feather";

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

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  dashboardsRoutes
];

// Routes using the Auth layout
export const authLayoutRoutes = [];

// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes
];
