import { withStyles } from '@iziges/napper-core-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { OfferType } from '../../../../prop-types';
import KanbanBoardCardPreviewDeleteComponent from './actions/delete';
import KanbanBoardCardPreviewActionsComponent from './actions/open-source';
import KanbanBoardCardPreviewStatusComponent from './actions/status';
import KanbanBoardCardPreviewCloseComponent from './close';

const styles = theme => ({
  card: ({ theme: name }) => {
    const width = 800;
    return {
      backgroundColor: theme.colors[name].popup,
      borderRadius: 7,
      color: theme.colors[name].color,
      composes: ['p24', 'columns', 'is-relative'],
      marginTop: 100,
      maxWidth: width,
      minWidth: width,
      width,
    };
  },
  columnLeft: {
    composes: ['col-2of3'],
  },
  columnRight: {
    composes: ['col-1of3', 'ml24', 'pt32'],
  },
  container: ({ theme: name }) => ({
    backgroundColor: `${theme.colors[name].background}DD`,
    bottom: 'auto',
    composes: [
      'is-absolute',
      'is-full-layout',
      'flex-columns',
      'items-start',
      'flex-around',
    ],
  }),
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
});

const KanbanBoardCardPreviewComponent = ({
  classes,
  offer,
  onChangeStatus,
  onDelete,
}) => {
  if (!offer) return <Redirect to="/board" />;
  const date = moment(offer.date);
  const fromnow = date.fromNow();
  return (
    <div className={classes.container} id={`offer-${offer.id}`}>
      <div className={classes.card}>
        <KanbanBoardCardPreviewCloseComponent theme="night" />
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
            theme="night"
          />
          <KanbanBoardCardPreviewDeleteComponent
            id={offer.id}
            theme="night"
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
  classes: PropTypes.shape().isRequired,
  // TODO creation d'un custom proptype pour les offer
  offer: OfferType.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(KanbanBoardCardPreviewComponent);
