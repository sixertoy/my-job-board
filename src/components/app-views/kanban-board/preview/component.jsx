import { withStyles } from '@iziges/napper-core-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { OfferType } from '../../../../prop-types';

const styles = theme => ({
  buttonClose: {
    composes: ['is-absolute', 'fs24'],
    right: 12,
    top: 12,
  },
  columnLeft: {
    composes: ['col-2of3'],
  },
  columnRight: {
    composes: ['col-1of3', 'ml24', 'pt32'],
  },
  container: {
    bottom: 'auto',
    composes: [
      'is-absolute',
      'is-full-layout',
      'flex-columns',
      'items-start',
      'flex-around',
    ],
    top: 100,
  },
  date: {
    composes: ['fs12', 'mb12'],
  },
  description: {
    composes: ['fs14'],
    lineHeight: '1.4rem',
  },
  sourceLink: () => {
    const backgroundColor = theme.colors.gray;
    return {
      backgroundColor,
      borderRadius: 4,
      composes: ['p7', 'fs14', 'mb12'],
    };
  },
  status: {
    composes: ['mb12'],
  },
  title: {
    composes: ['fs20', 'is-bold', 'mb12'],
  },
  wrapper: () => {
    const width = 800;
    return {
      backgroundColor: theme.colors.white,
      borderRadius: 7,
      composes: ['p24', 'columns', 'is-relative'],
      maxWidth: width,
      minWidth: width,
      width,
    };
  },
});

const KanbanBoardPreviewComponent = ({ classes, offer }) => {
  const date = moment(offer.date);
  const fromnow = date.fromNow();
  return (
    <div className={classes.container} id={`offer-${offer.id}`}>
      <div className={classes.wrapper}>
        <Link className={classes.buttonClose} to="/board">
          <IoMdCloseCircle />
        </Link>
        <div className={classes.columnLeft}>
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
          <div className={classes.status}>
            <span>{offer.status}</span>
          </div>
          <div className={classes.sourceLink}>
            <Link to={offer.link}>
              <span>Voir l&apos;offre sur &nbsp;</span>
              <span>{offer.sourceKey}</span>
            </Link>
          </div>
          <div className={classes.date}>
            <span className="is-block mb5">publi&eacute;&nbsp;{fromnow}</span>
            <i className="is-block">{date.format('LLLL')}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

KanbanBoardPreviewComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  // TODO creation d'un custom proptype pour les offer
  offer: OfferType.isRequired,
};

export default withStyles(styles)(KanbanBoardPreviewComponent);
