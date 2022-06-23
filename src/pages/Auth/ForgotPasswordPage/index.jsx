import { Button, Text, Input } from 'components';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import routes from '../../../apis/routes';

export const ForgotPasswordPage = () => {
  const [userEmail, setEmail] = useState('');

  useEffect(() => {}, []);

  const forgotPassword = (e) => {
    e.preventDefault();
    (async () => {
      const res = await routes.auth.forgotPassword({ email: userEmail });
      if (res.status === 200) {
        toast.success('Email sent! Please check your mailbox');
      } else {
        toast.error('Trouble');
      }
    })();
  };

  return (
    <div className="wrapper-container">
      <Text.Heading text="Reset Password" size={24} weight={500} level={1} />
      <div className="wrapper--email">
        <div className="wrapper--label--email">
          <Text text="Enter your Email Address" />
        </div>
        <div className="wrapper--input--email">
          <Input.FullRound
            name="email"
            type="email"
            placeholder="info@recyclepay.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <Button stretch btnType="primary" text="Send Recovery Link" onClick={forgotPassword} />
      <div className="signin-main-footer-text">
        <Text.Heading text="Don't have an account?" color="grey" size={14} weight={500} level={4} />
        <Link to="/signup">
          <Text.Heading text="Sign Up" color="green" size={14} weight={500} level={4} />
        </Link>
      </div>
    </div>
  );
};
