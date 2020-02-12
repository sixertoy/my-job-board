import { FaTasks } from 'react-icons/fa';
import { IoIosDocument, IoMdCalendar, IoMdHome } from 'react-icons/io';

import ViewBoardComponent from '../app/views/board';
import ViewHomeComponent from '../app/views/home';
import ViewNotesComponent from '../app/views/notes';
import ViewProjectsComponent from '../app/views/projects';

export const boardRoute = {
  basepath: '/board',
  component: ViewBoardComponent,
  icon: FaTasks,
  label: 'Job Board',
  params: '/:id?',
};

export const homeRoute = {
  basepath: '/',
  component: ViewHomeComponent,
  icon: IoMdHome,
  label: 'Accueil',
  params: '',
};

export const notesRoute = {
  basepath: '/notes',
  component: ViewNotesComponent,
  icon: IoIosDocument,
  label: 'Notes',
  params: '/:id?',
};

export const projectsRoute = {
  basepath: '/projects',
  component: ViewProjectsComponent,
  icon: IoMdCalendar,
  label: 'Projects',
  params: '/:id?',
};
