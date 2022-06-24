import React from 'react';
import { Text } from 'components';
import './index.css';
import { useDispatch } from 'react-redux';
import { AUTH_ACTIONS } from 'store/reducer/auth/authSlice';
import { ReactComponent as Grid } from './images/grid.svg';
import { ReactComponent as Wallet } from './images/wallet.svg';
import { ReactComponent as Payment } from './images/payment.svg';
import { ReactComponent as Newsfeeds } from './images/newsfeed.svg';
import { ReactComponent as Account } from './images/accountdisc.svg';
import { ReactComponent as Logout } from './images/logout.svg';
import { ReactComponent as Num } from './images/num.svg';

export const SideBar = () => {
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
        <Grid />
        <Text className="containerText">Overview</Text>
      </div>

      <div className="box">
        <Wallet />
        <Text>Point Wallet</Text>
      </div>

      <div className="box">
        <Payment />
        <Text>Payment History</Text>
      </div>

      <div className="box">
        <Newsfeeds />
        <Text>News Feed</Text>
        <Num />
      </div>
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
