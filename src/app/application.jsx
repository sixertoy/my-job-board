import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'react-jss';
import { connect } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import { getThemeByThemeKey } from '../theme';
import MainLayoutComponent from './main-layout';

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
