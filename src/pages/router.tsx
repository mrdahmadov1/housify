import React from "react";
import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

interface Page {
  path: string;
  title: string;
  element: React.ReactNode;
  children?: Page[];
}

const renderRoutes = (routes: Page[]): React.ReactNode[] => {
  return routes.map(({ path, title, element, children = [] }) => {
    return (
      <Route key={title} path={path} element={element}>
        {children.length > 0 && <Route>{renderRoutes(children)}</Route>}
      </Route>
    );
  });
};

const Router: React.FC = () => {
  const pageRoutes = renderRoutes(pagesData);
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
