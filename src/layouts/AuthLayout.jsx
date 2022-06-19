import React from 'react';
import 'layouts/layout.css';
import PropTypes from 'prop-types';
import { Text } from 'components';
import clsx from 'clsx';

export const AuthLayout = ({ children, headerClassName, bodyClassName }) => (
  <>
    <header className={clsx('nav-header', headerClassName)}>
      <Text size={24} color="white">
        Recycle Pay
      </Text>
    </header>
    <div className={clsx('form-container', bodyClassName)}>
      <div className="nav-content">{children}</div>
    </div>
  </>
);

AuthLayout.propTypes = {
  children: PropTypes.node,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};
