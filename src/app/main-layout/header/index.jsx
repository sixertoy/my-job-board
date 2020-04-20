import { noop } from '@nappr/nappr-core/lib/core';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router-dom';
import { compose } from 'redux';

// import { selectProjectById } from '../../../redux/selectors';
import routes from '../../../routes';
import AppHeaderComponent from './component';

function selectProjectFromId(state, id) {
  const { projects } = state;
  return projects.find(obj => obj.id === id);
}

function getSelectorFromMatchingPath(basepath) {
  const path = basepath.slice(1);
  switch (path) {
    case 'project':
    case 'projects':
      return selectProjectFromId;
    default:
      return null;
  }
}

function concatRouteToMatch(route, match) {
  return { route, ...match };
}

function getMatchingBreadcrumb(matching, state) {
  const { basepath, label } = matching.route;
  let next = [label, basepath];
  const result = [next];
  const { id, view } = matching.params;
  if (id) {
    const selector = getSelectorFromMatchingPath(basepath);
    const selected = selector(state, id);
    next = [selected.title, selected.permalink];
    result.push(next);
  }
  if (view) {
    const permalink = `${basepath}/${view}`;
    next = [view, permalink];
    result.push(next);
  }
  result.reverse();
  return result;
}

const mapStateToProps = (state, { location }) => {
  const { pathname } = location;
  const matching = routes
    .map(route => {
      const path = `${route.basepath}${route.params}`;
      const obj = matchPath(pathname, { exact: true, path, strict: false });
      if (!obj) return null;
      return concatRouteToMatch(route, obj);
    })
    .filter(noop)
    .reduce((acc, obj) => obj, null);
  const breadcrumb = getMatchingBreadcrumb(matching, state);
  return { breadcrumb };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(AppHeaderComponent);
