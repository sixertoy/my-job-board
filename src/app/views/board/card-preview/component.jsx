import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import { OfferType } from '../../../../prop-types';
import KanbanBoardCardPreviewDeleteComponent from './actions/delete';
import KanbanBoardCardPreviewActionsComponent from './actions/open-source';
import KanbanBoardCardPreviewStatusComponent from './actions/status';
import KanbanBoardCardPreviewCloseComponent from './close';

const useStyles = createUseStyles(theme => ({
  card: {
    backgroundColor: theme.colors.popup,
    borderRadius: 7,
    color: theme.colors.color,
    composes: ['p24', 'columns', 'is-relative'],
    marginTop: 100,
    maxWidth: 800,
    minWidth: 800,
    width: 800,
  },
  columnLeft: {
    composes: ['col-2of3'],
  },
  columnRight: {
    composes: ['col-1of3', 'ml24', 'pt32'],
  },
  container: {
    backgroundColor: `${theme.colors.background}DD`,
    bottom: 'auto',
    composes: [
      'is-absolute',
      'is-full-layout',
      'flex-columns',
      'items-start',
      'flex-around',
    ],
  },
  date: {
    composes: ['fs12', 'mb12'],
  },
  description: {
    composes: ['fs14'],
    lineHeight: '1.4rem',
  },
  published: {
    composes: ['is-block', 'mb5'],
  },
  title: {
    composes: ['fs20', 'is-bold', 'mb12'],
  },
}));

const KanbanBoardCardPreviewComponent = ({
  offer,
  onChangeStatus,
  onDelete,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const date = moment(offer.date);
  const fromnow = date.fromNow();
  if (!offer) return <Redirect to="/board" />;
  return (
    <div className={classes.container} id={`offer-${offer.id}`}>
      <div className={classes.card}>
        <KanbanBoardCardPreviewCloseComponent />
        <div className={classes.columnLeft}>
          <span className={classes.published}>
            publi&eacute;&nbsp;{fromnow}
          </span>
          <h3 className={classes.title}>
            <span>{offer.title}</span>
          </h3>
          <div
            className={classes.description}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: offer.description }}
          />
        </div>
        <div className={classes.columnRight}>
          <KanbanBoardCardPreviewStatusComponent
            selected={offer.status || ''}
            theme="night"
            onChange={onChangeStatus}
          />
          <KanbanBoardCardPreviewActionsComponent
            link={offer.link}
            origin={offer.sourceKey}
          />
          <KanbanBoardCardPreviewDeleteComponent
            id={offer.id}
            onClick={onDelete}
          />
          <div className={classes.date}>
            <i className="is-block">{date.format('LLLL')}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

KanbanBoardCardPreviewComponent.propTypes = {
  // TODO creation d'un custom proptype pour les offer
  offer: OfferType.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default KanbanBoardCardPreviewComponent;
