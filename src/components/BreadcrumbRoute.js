import React from 'react';
import BreadcrumbWizard from '../components/BreadcrumbWizard';
import {
  Router,
  Link,
  Route,
  Routes,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import folderData from '../data/folderData';

 const BreadcrumbRoute = ({
  component,
  exact = true,
  path,
  jsonData,
  separator = '>',
  rootPathImg = 'https://image.flaticon.com/icons/svg/25/25694.svg',
}) => {
  return (
    <>
    <Routes>
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          <React.Fragment>
            <BreadcrumbWizard
              routePath={path}
              separator={separator}
              rootPathImg={rootPathImg}
              jsonData={folderData}
              props={props}
            />
            {React.createElement(component, props)}
          </React.Fragment>
        );
      }}
    />
    </Routes>
    </>
  );
};

export default BreadcrumbRoute
