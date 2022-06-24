// import React, { useState, useEffect } from 'react';
import { DashHeader, SideBar, Text, RecentPickups, Welcome } from 'components';
import './index.css';
import { pickupsindone } from 'components/molecules/RecentPickups/pickupsindone';
// import routes from 'apis/routes';
// import { userData } from './dummy';

export const IndividualOne = () => (
  <div className="overview">
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="content">
      <div className="header">
        <DashHeader />
      </div>
      <div className="welcome">
        <Welcome />
      </div>
      <div className="head-text">
        <Text>Recent Pickups</Text>
        <div className="right-text">
          <Text>Your Total Points</Text>
          &nbsp;123
        </div>
      </div>
      <div>
        {pickupsindone.map((item) => (
          <RecentPickups {...item} key={item.id} />
        ))}
      </div>
    </div>
  </div>
);
