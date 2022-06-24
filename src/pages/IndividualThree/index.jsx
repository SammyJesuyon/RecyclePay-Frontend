// import React, { useState, useEffect } from 'react';
import { DashHeader, SideBar, Text, RecentPickups, Welcome3 } from 'components';
import './index.css';
import { pickupsindtwo } from 'components/molecules/RecentPickups/pickupsindtwo';
// import routes from 'apis/routes';
// import { userData } from './dummy';

export const IndividualThree = () => (
  // const [userActivities, setUserActivities] = useState('');
  // const getUserActivities = async () => {
  //   const res = await routes.dashboard.main();
  //   setUserActivities(res.data);
  //   console.log('dashboard-data', userActivities);
  // };
  // useEffect(() => {
  //   getUserActivities();
  // }, []);
  <div className="overview">
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="content">
      <div className="header">
        <DashHeader />
      </div>
      <div className="welcome">
        <Welcome3 />
      </div>
      <div className="head-text">
        <Text>Recent Pickups</Text>
        <div className="right-text">
          <Text>Your Total Points</Text>
          &nbsp;123
        </div>
      </div>
      <div>
        {pickupsindtwo.map((item) => (
          <RecentPickups {...item} key={item.id} />
        ))}
      </div>
    </div>
  </div>
);
