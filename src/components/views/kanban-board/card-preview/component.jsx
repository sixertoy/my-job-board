import { withStyles } from '@iziges/napper-core-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link, Redirect } from 'react-router-dom';

import { OfferType } from '../../../../prop-types';
import KanbanBoardCardPreviewStatusComponent from './status';

const styles = theme => ({
  buttonClose: {
    composes: ['is-absolute', 'fs24'],
    right: 12,
    top: 12,
  },
  card: ({ theme: name }) => {
    const width = 800;
    return {
      backgroundColor: theme.colors[name].foreground,
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
  sourceLink: ({ theme: name }) => {
    const backgroundColor = theme.colors[name].gray;
    return {
      backgroundColor,
      borderRadius: 4,
      composes: ['p7', 'fs14', 'mb12'],
    };
  },
  title: {
    composes: ['fs20', 'is-bold', 'mb12'],
  },
});

const KanbanBoardCardPreviewComponent = ({
  classes,
  offer,
  onChangeStatus,
}) => {
  if (!offer) return <Redirect to="/board" />;
  const date = moment(offer.date);
  const fromnow = date.fromNow();
  return (
    <div className={classes.container} id={`offer-${offer.id}`}>
      <div className={classes.card}>
        <Link className={classes.buttonClose} to="/board">
          <IoMdCloseCircle />
        </Link>
        <div className={classes.columnLeft}>
          <span className="is-block mb5">publi&eacute;&nbsp;{fromnow}</span>
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
          <div className={classes.sourceLink}>
            <Link to={offer.link}>
              <span>Voir l&apos;offre sur &nbsp;</span>
              <span>{offer.sourceKey}</span>
            </Link>
          </div>
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
};

export default withStyles(styles)(KanbanBoardCardPreviewComponent);
