import { GoTasklist } from 'react-icons/go';
import { IoIosDocument, IoMdHome } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

import ViewBoardComponent from './app/views/board';
import ViewHomeComponent from './app/views/home';
import ViewNotesComponent from './app/views/notes';
import ViewProjectsComponent from './app/views/projects';
import { mapOrderToRoutes, mapSlugToRoutes } from './helpers';

const boardRoute = {
  basepath: '/board',
  component: ViewBoardComponent,
  icon: MdDashboard,
  label: 'Job Board',
  params: '/:id?',
};

const homeRoute = {
  basepath: '/',
  component: ViewHomeComponent,
  icon: IoMdHome,
  label: 'Accueil',
  params: '',
};

const notesRoute = {
  basepath: '/notes',
  component: ViewNotesComponent,
  icon: IoIosDocument,
  label: 'Notes',
  params: '/:id?',
};

const projectsRoute = {
  basepath: '/projects',
  component: ViewProjectsComponent,
  icon: GoTasklist,
  label: 'Projects',
  params: '/:id?',
};

const routes = [homeRoute, boardRoute, notesRoute, projectsRoute]
  .map(mapOrderToRoutes)
  .map(mapSlugToRoutes);

export default routes;
