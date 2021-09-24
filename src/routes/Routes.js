import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { dashboardLayoutRoutes, authLayoutRoutes } from "./index";

import DashboardLayout from "../layouts/Dashboard";
import AuthLayout from "../layouts/Auth";
import Page404 from "../pages/auth/Page404";
import { useTranslation } from "react-i18next";
import { setDirection } from "utils";

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

const Routes = () => {
  let query = new URLSearchParams(window.location.search);
  const { i18n } = useTranslation('common');
  React.useEffect(() => {
    let language = query.get('lang') || localStorage.getItem('VH_LANG');
    const availableLanguage = Object.keys(i18n?.options?.resources);
    if (language && availableLanguage.includes(language)) {
      localStorage.setItem('VH_LANG', language.toLowerCase());
      i18n.changeLanguage(language.toLowerCase());
      if (language.toUpperCase() === 'IL') {
        setDirection('rtl');
      }
    }
  }, [])

  return <Router>
    <Switch>
      {childRoutes(DashboardLayout, dashboardLayoutRoutes)}
      {childRoutes(AuthLayout, authLayoutRoutes)}
      <Route
        render={() => (
          <AuthLayout>
            <Page404 />
          </AuthLayout>
        )}
      />
    </Switch>
  </Router>
};

export default Routes;
