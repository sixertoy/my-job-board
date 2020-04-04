import { IoIosFlask, IoMdHome } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

import BoardComponent from './app/views/board';
import HomeComponent from './app/views/home';
import ProjectComponent from './app/views/project';
import ProjectComponentCM from './app/views/project/context-menu';
import ProjectsComponent from './app/views/projects';
import ProjectsComponentCM from './app/views/projects/context-menu';
import {
  filterDisabledRoutes,
  mapSlugToRoutes,
  sortRoutesByOrder,
} from './helpers';

const boardRoute = {
  basepath: '/board',
  component: BoardComponent,
  contextmenu: false,
  icon: MdDashboard,
  label: 'Job Board',
  order: -1,
  params: '/:id?',
};

const homeRoute = {
  basepath: '/',
  component: HomeComponent,
  contextmenu: false,
  icon: IoMdHome,
  label: 'Accueil',
  order: 0,
  params: '',
};

const projectsRoute = {
  basepath: '/projects',
  component: ProjectsComponent,
  contextmenu: ProjectsComponentCM,
  icon: IoIosFlask,
  label: 'Projects',
  order: 10,
  params: '/',
};

const projectRoute = {
  basepath: '/projects',
  component: ProjectComponent,
  contextmenu: ProjectComponentCM,
  icon: false,
  label: 'Projects',
  order: 10,
  params: '/:id?/:view(todos|notes)?',
};

const routes = [homeRoute, boardRoute, projectsRoute, projectRoute]
  .filter(filterDisabledRoutes)
  .map(mapSlugToRoutes)
  .sort(sortRoutesByOrder);

export default routes;
