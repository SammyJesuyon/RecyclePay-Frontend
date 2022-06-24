import React from 'react';
import { DashHeader, CollectorSideBar, Text } from 'components';
import './index.css';

export const CollectorThree = () => (
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
        <Text>You have no assigned Pickups</Text>
        {/* <div className="right-text">
          <Text>Your Total Points</Text>
          &nbsp;1769
        </div> */}
      </div>

      <div>
        {/* {pickups.map((item) => (
            <RecentPickups {...item} key={item.id} />
          ))} */}
        {/* <PickupSnipets /> */}
      </div>
    </div>
  </div>
);
