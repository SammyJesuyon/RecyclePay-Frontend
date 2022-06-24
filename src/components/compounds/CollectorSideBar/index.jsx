import React from 'react';
import { Text } from 'components';
import './index.css';
import { useDispatch } from 'react-redux';
import { AUTH_ACTIONS } from 'store/reducer/auth/authSlice';
// import { ReactComponent as Grid } from './images/grid.svg';
// import { ReactComponent as Wallet } from './images/wallet.svg';
import { ReactComponent as Truck } from './images/truck.svg';
import { ReactComponent as Clipboard } from './images/clipboard.svg';
import { ReactComponent as Account } from './images/accountdisc.svg';
import { ReactComponent as Logout } from './images/logout.svg';
// import { ReactComponent as Num } from './images/num.svg';

export const CollectorSideBar = () => {
  const { logoutUser } = AUTH_ACTIONS;

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <Text.Heading
          text="RecyclePay"
          level={1}
          weight={700}
          size={24}
          line-height="32px"
          width="128px"
          color="green"
        />
      </div>

      <div className="box1 box">
        <Truck />
        <Text className="containerText">Assigned Pickups</Text>
      </div>

      <div className="box">
        <Clipboard />
        <Text>Pickup History</Text>
      </div>

      {/* <div className="box">
        <Payment />
        <Text>Payment History</Text>
      </div> */}

      {/* <div className="box">
        <Newsfeeds />
        <Text>News Feed</Text>
        <Num />
      </div> */}
      <hr />

      <div className="box">
        <Account className="img" />
        <Text>Account Settings</Text>
      </div>

      <div className="space" />

      <button
        type="button"
        className="box remove-btn-prop"
        onClick={() => {
          logout();
        }}
      >
        <Text>Log Out</Text>
        <Logout className="log" onClick={logout} />
      </button>

      <div className="box">
        <Text text="Help & Support" color="green" />
      </div>
    </div>
  );
};
