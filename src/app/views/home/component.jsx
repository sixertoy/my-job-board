import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { FortunesType } from '../../../prop-types';

const styles = theme => ({
  container: {},
  wrapper: {
    color: theme.colors.color,
    composes: ['p24'],
  },
});

const ViewHomeComponent = ({ classes, fortune, loadFortunes }) => {
  useEffect(() => {
    loadFortunes();
  }, [loadFortunes]);
  return (
    <div className={classes.container}>
      <div>Welcome</div>
      {fortune && (
        <div className={classes.wrapper}>
          <div>
            <h3>Fortune cookie</h3>
            <p>{fortune.cookies.message}</p>
          </div>
          <div>
            <h3>Lotto Numbers</h3>
            <p>{fortune.cookies.numbers.join(' | ')}</p>
          </div>
          <div>
            <h3>Git Tips</h3>
            <p>{fortune.tips.title}</p>
            <pre>{fortune.tips.tip}</pre>
          </div>
          <div>
            <h3>Kanye&apos;s Quote</h3>
            <p>{fortune.kanye}</p>
          </div>
          <div>
            <h3>Fun Fact</h3>
            <p>{fortune.funfact}</p>
          </div>
          <div>
            <h3>Opionated Quote</h3>
            <p>{fortune.opinion}</p>
          </div>
          <div>
            <h3>Geek Quote</h3>
            <p>{fortune.geek}</p>
          </div>
          <div>
            <h3>TRBMB</h3>
            <p>{fortune.trbmb}</p>
          </div>
          <div>
            <h3>Trump&apos;s quote</h3>
            <p>{fortune.trump}</p>
          </div>
          <div>
            <h3>Wait, what does your startup do ? </h3>
            <p>{fortune.isthisforthat}</p>
          </div>
        </div>
      )}
    </div>
  );
};

ViewHomeComponent.defaultProps = {};

ViewHomeComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  fortune: FortunesType.isRequired,
  loadFortunes: PropTypes.func.isRequired,
};

export default withStyles(styles)(ViewHomeComponent);
