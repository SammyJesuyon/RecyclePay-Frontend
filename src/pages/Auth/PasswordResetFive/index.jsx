import React from 'react';
import { Text, Button } from 'components';
import { Link } from 'react-router-dom';

export const PasswordResetFive = () => (
  <div className="wrapper-container">
    <Text.Heading text="Reset Password" size={24} weight={500} level={1} />
    <Text size={18} className="wrapper--text">
      Hi Yemi,Your password has been successfully reset.
    </Text>
    <Link to="/login">
      <Button stretch btnType="primary" text="Sign in" />
    </Link>
  </div>
);
