import React from 'react';
import { DashHeader, Text, RecentPickups } from 'components';
import { pickups } from './pickups';
import { CollectorSideBar } from './CollectorSideBar';
import './index.css';

// import routes from 'apis/routes';
// import { userData } from './dummy';

export const CollectorFour = () => (
  <div className="overview">
    <div className="sidebar">
      <CollectorSideBar />
    </div>
    <div className="content">
      <div className="header">
        <DashHeader name="Michael Taylor" initial="MT" />
      </div>
      {/* <div className="welcome">
        <Welcome />
      </div> */}
      <div className="head-text">
        <Text>Your Previous Pickups</Text>
        {/* <div className="right-text">
          <Text>Your Total Points</Text>
          &nbsp;1769
        </div> */}
      </div>
      <div>
        {pickups.map((item) => (
          <RecentPickups {...item} key={item.id} />
        ))}
      </div>
    </div>
  </div>
);
