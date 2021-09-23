import React from "react";

import async from "../components/Async";

import {
  Sliders,
} from "react-feather";

// Home components
const Home = async(() => import("../pages/Home"));
const Broadcast = async(() => import("../pages/Broadcast"));
const TermsOfService = async(() => import("../pages/TermsOfService"));

const dashboardsRoutes = {
  id: "Home",
  path: "/",
  header: "Home",
  icon: <Sliders />,
  containsHome: true,
  component: Home
};

const termsRoutes = {
  id: "Terms and Service Statement",
  path: "/terms",
  header: "Terms and Service",
  icon: <Sliders />,
  containsHome: true,
  component: TermsOfService
};

const broadcastRoute = {
  id: "Broadcast",
  path: "/live",
  header: "Broadcast",
  icon: <Sliders />,
  containsHome: true,
  component: Broadcast
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  dashboardsRoutes,
  termsRoutes,
  broadcastRoute
];

// Routes using the Auth layout
export const authLayoutRoutes = [];

// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes,
  broadcastRoute
];
