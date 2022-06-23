import React, { useState, useEffect } from 'react';
import { DashHeader, SideBar, Text, RecentPickups, Welcome } from 'components';
import './index.css';
import { pickups } from 'components/molecules/RecentPickups/pickups';
import routes from 'apis/routes';
// import { userData } from './dummy';

export const OverviewPage = () => {
  const [userActivities, setUserActivities] = useState('');
  const getUserActivities = async () => {
    const res = await routes.dashboard.main();
    setUserActivities(res.data);
    console.log('dashboard-data', userActivities);
  };
  useEffect(() => {
    getUserActivities();
  }, []);
  return (
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
            &nbsp;1769
          </div>
        </div>
        <div>
          {pickups.map((item) => (
            <RecentPickups {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
