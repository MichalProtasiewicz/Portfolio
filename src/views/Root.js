import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import AboutPage from 'views/AboutPage';
import SkillsPage from 'views/SkillsPage';
import ProjectsPage from 'views/ProjectsPage';
import ContactPage from 'views/ContactPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={MainPage} />
        <Route path={routes.about} component={AboutPage} />
        <Route path={routes.skills} component={SkillsPage} />
        <Route exact path={routes.projects} component={ProjectsPage} />
        <Route exact path={routes.contact} component={ContactPage} />
        <Route render={() => <Redirect to={routes.home} />} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
