import React from 'react';
// import { IoIosSettings } from 'react-icons/io';
// import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-0'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between'],
  },
});

const BoardHeaderComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="kanban-header">
      <div className={classes.wrapper}>
        {/* <div>
          <b>Prochaine mise à jour automatique&nbsp;</b>
          <span>{nextUpdate}</span>
        </div> */}
        {/* <div>
          <Link className={classes.refresh} to="/board/settings">
            <IoIosSettings />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

BoardHeaderComponent.propTypes = {
  // nextUpdate: PropTypes.string.isRequired,
};

export default BoardHeaderComponent;
