import React from 'react';
import 'layouts/layout.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SideBar, Text } from 'components';
import icon from './icon.svg';

const hideLeftSidebar = () => {
  document.querySelector('.left-sidebar').classList.add('left-slide');
};

const showLeftSidebar = () => {
  document.querySelector('.left-sidebar').classList.remove('left-slide');
};

export const DashboardLayout = ({ children, title, sidebarClassName, bodyClassName }) => (
  <>
    <div>
      <button type="button" onClick={() => showLeftSidebar()} className="show-sidebar">
        <img src={icon} alt="" className="left-slide-icon" />{' '}
      </button>
      <SideBar />
    </div>
    <div className={clsx('left-sidebar', sidebarClassName)}>
      <div className="sidebar-header">
        <Text>{title}</Text>
        <button type="button" onClick={() => hideLeftSidebar()}>
          <img src={icon} alt="" className="left-slide-icon" />{' '}
        </button>
      </div>
      <div className={clsx('sidebar-content', bodyClassName)}>
        <div />
        {children}
      </div>
    </div>
  </>
);

DashboardLayout.propTypes = {
  children: PropTypes.node,
  sidebarClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  title: PropTypes.string,
};
