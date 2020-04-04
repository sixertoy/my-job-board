import { IoIosFlask, IoMdHome } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

import ViewBoardComponent from './app/views/board';
import ViewHomeComponent from './app/views/home';
import ProjectComponent from './app/views/project';
import ViewProjectsComponent from './app/views/projects';
import ViewProjectsComponentCM from './app/views/projects/context-menu';
import {
  filterDisabledRoutes,
  mapSlugToRoutes,
  sortRoutesByOrder,
} from './helpers';

const boardRoute = {
  basepath: '/board',
  component: ViewBoardComponent,
  contextmenu: false,
  icon: MdDashboard,
  label: 'Job Board',
  order: -1,
  params: '/:id?',
};

const homeRoute = {
  basepath: '/',
  component: ViewHomeComponent,
  contextmenu: false,
  icon: IoMdHome,
  label: 'Accueil',
  order: 0,
  params: '',
};

const projectsRoute = {
  basepath: '/projects',
  component: ViewProjectsComponent,
  contextmenu: ViewProjectsComponentCM,
  icon: IoIosFlask,
  label: 'Projects',
  order: 10,
  params: '/',
};

const projectRoute = {
  basepath: '/projects',
  component: ProjectComponent,
  contextmenu: false,
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
