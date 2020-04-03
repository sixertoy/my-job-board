import { FaProjectDiagram } from 'react-icons/fa';
import { IoIosDocument, IoMdHome } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

import ViewBoardComponent from './app/views/board';
import ViewHomeComponent from './app/views/home';
import ViewNotesComponent from './app/views/notes';
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

const notesRoute = {
  basepath: '/notes',
  component: ViewNotesComponent,
  contextmenu: false,
  icon: IoIosDocument,
  label: 'Notes',
  order: -1,
  params: '/:id?',
};

const projectsRoute = {
  basepath: '/projects',
  component: ViewProjectsComponent,
  contextmenu: ViewProjectsComponentCM,
  icon: FaProjectDiagram,
  label: 'Projects',
  order: 10,
  params: '/:id?/:view(todos|notes)?',
};

const routes = [homeRoute, boardRoute, notesRoute, projectsRoute]
  .filter(filterDisabledRoutes)
  .map(mapSlugToRoutes)
  .sort(sortRoutesByOrder);

export default routes;
