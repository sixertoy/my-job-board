import { FaStickyNote } from 'react-icons/fa';

// import { Redirect } from 'react-router-dom';
import ViewBoardComponent from './app/views/board';
import ViewHomeComponent from './app/views/home';
import ViewNotesComponent from './app/views/notes';
import ViewProjectsComponent from './app/views/projects';

const routes = [
  {
    component: ViewBoardComponent,
    icon: 'ico-offres',
    label: 'Job Board',
    path: '/board/:id?',
  },
  {
    component: ViewHomeComponent,
    icon: 'ico-offres',
    label: 'Accueil',
    path: '/',
  },
  {
    component: ViewNotesComponent,
    icon: FaStickyNote,
    label: 'Notes',
    path: '/notes/:id?',
  },
  {
    component: ViewProjectsComponent,
    icon: 'ico-offres',
    label: 'Projects',
    path: '/projects/:id?',
  },
];

export default routes;
