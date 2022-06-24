import React from 'react';
import { DashHeader, CollectorSideBar, Text, PickupSnipets } from 'components';
import './index.css';
// import { pickups } from 'components/molecules/RecentPickups/pickups';
// import routes from 'apis/routes';
// import { userData } from './dummy';

const dummmyData = [
  {
    customer: 'David Michael',
    date: '24 - 06 - 2022',
    address: '7 decagon street, Lagos',
  },
  // {
  //   customer: 'David Michael',
  //   date: '24 - 06 - 2022',
  //   address: '7 decagon street, Lagos',
  // },
];

export const CollectorOne = () => (
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
        {dummmyData.map((item) => (
          <PickupSnipets {...item} key={item.id} />
        ))}
      </div>
    </div>
  </div>
);
