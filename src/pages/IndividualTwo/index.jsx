// import React, { useState, useEffect } from 'react';
import { DashHeader, SideBar, Text, Input, Welcome2 } from 'components';
import './index.css';
// import routes from 'apis/routes';
// import { userData } from './dummy';

export const IndividualTwo = () => (
  <div className="overview">
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="content">
      <div className="header">
        <DashHeader />
      </div>
      <div className="welcome" style={{ marginBottom: '-20px' }}>
        <Welcome2 />
      </div>
      <div className="head-text" style={{ display: 'flex', flexDirection: 'column' }}>
        <Text size={28}>Pickup Information</Text>
        <form>
          <Text size={20}>Material Type</Text>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type="radio" name="gender" value="male" onChange="" />
              <Text size={14} style={{ marginLeft: '10px', color: 'grey' }}>
                Plastic
              </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type="radio" name="gender" value="Female" onChange="" />
              <Text size={14} style={{ marginLeft: '10px', color: 'grey' }}>
                Bottles
              </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type="radio" name="gender" value="Female" onChange="" />
              <Text size={14} style={{ marginLeft: '10px', color: 'grey' }}>
                Metal
              </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type="radio" name="gender" value="Female" onChange="" />
              <Text size={14} style={{ marginLeft: '10px', color: 'grey' }}>
                Paper & Cardboard
              </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type="radio" name="gender" value="Female" onChange="" />
              <Text size={14} style={{ marginLeft: '10px', color: 'grey' }}>
                Tires
              </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <input type="radio" name="gender" value="Female" onChange="" />
              <Text size={14} style={{ marginLeft: '10px', color: 'grey' }}>
                Batteries & Electronics
              </Text>
            </div>
          </div>
          <div>
            <div style={{ margin: '10px 0' }}>
              <Text size={16}>Pickup Address</Text>
            </div>
            <Input.FullRound style={{ width: '50%' }} type="text" placeholder="Enter pickup address" />
          </div>
          <div>
            <div style={{ margin: '10px 0' }}>
              <Text size={16}>Set Pickup Date</Text>
            </div>
            <Input.FullRound style={{ width: '50%' }} type="datetime-local" placeholder="Enter pickup address" />
          </div>
        </form>
      </div>
    </div>
  </div>
);
