import React from 'react';
import { DashHeader, CollectorSideBar, Text, PickupSnipets } from 'components';
import './index.css';
// import { pickups } from 'components/molecules/RecentPickups/pickups';
// import routes from 'apis/routes';
// import { userData } from './dummy';
import { Modal } from './modal';

export const CollectorTwo = () => (
  <div className="overview">
    <Modal />
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
        <Text>Your Assigned Pickups</Text>
        {/* <div className="right-text">
          <Text>Your Total Points</Text>
          &nbsp;1769
        </div> */}
      </div>
      <div>
        {/* {pickups.map((item) => (
            <RecentPickups {...item} key={item.id} />
          ))} */}
        <PickupSnipets />
      </div>
    </div>
  </div>
);
