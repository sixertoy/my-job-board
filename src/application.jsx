import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'react-jss';
import { connect } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import MainLayoutComponent from './app/main-layout';
import { getThemeByThemeKey } from './theme';

const Application = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <ToastProvider>
      <MainLayoutComponent />
    </ToastProvider>
  </ThemeProvider>
);

Application.propTypes = {
  theme: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const { selectedTheme } = state;
  const theme = getThemeByThemeKey(selectedTheme);
  return { theme };
};

export default connect(mapStateToProps)(Application);
