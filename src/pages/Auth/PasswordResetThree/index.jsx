import React from 'react';
import { Text, Button } from 'components';

export const PasswordResetThree = () => (
  <div className="wrapper-container">
    <Text.Heading text="Reset Password" size={24} weight={500} level={1} />
    <Text size={18} className="wrapper--text">
      Hi Yemi,
      <br /> A request was made to reset your password. If you made this request, please continue.
    </Text>
    <Button stretch btnType="primary" text="Yes, continue" />
  </div>
);
