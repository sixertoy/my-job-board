import './core/styles.css';

import PropTypes from 'prop-types';
import React from 'react';
import { jss, JssProvider, ThemeProvider } from 'react-jss';

import NapperTodoListComponent from './component';
import { BASE_THEME, CLASS_NAME_PREFIX, MINIFY } from './core/constants';
import { ThemeType } from './core/prop-types';

const NapperTodoList = props => {
  const { jssMinifyId, theme, ...rest } = props;
  const minify = jssMinifyId || MINIFY;
  const mergedTheme = { ...BASE_THEME, ...theme };
  return (
    <JssProvider classNamePrefix={CLASS_NAME_PREFIX} id={{ minify }} jss={jss}>
      <ThemeProvider theme={mergedTheme}>
        <NapperTodoListComponent {...rest} />
      </ThemeProvider>
    </JssProvider>
  );
};

NapperTodoList.defaultProps = {
  jssMinifyId: false,
  theme: {},
};

NapperTodoList.propTypes = {
  jssMinifyId: PropTypes.bool,
  theme: ThemeType,
};

export default NapperTodoList;
