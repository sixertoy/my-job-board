import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'react-jss';
import { connect } from 'react-redux';

import MainLayoutComponent from './layout';
import { getThemeByThemeKey } from './theme';

const Application = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <MainLayoutComponent />
  </ThemeProvider>
);

Application.propTypes = {
  theme: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const { selectedTheme } = state;
  console.log('selectedTheme', selectedTheme);
  const theme = getThemeByThemeKey(selectedTheme);
  return { theme };
};

export default connect(mapStateToProps)(Application);
