import React, { useState, useEffect } from 'react';
import { Text, Button, Input } from 'components';
import { useParams } from 'react-router-dom';

import routes from 'apis/routes';
import { toast } from 'react-toastify';

export const ResetPasswordPage = () => {
  const [markOtp, setMarkOtp] = useState('');
  const [markPassword, setMarkPassword] = useState('');
  const [markConfirm, setMarkConfirm] = useState('');

  const params = useParams();
  const encodedEmail = params.encodedEmail;
  console.log(encodedEmail);

  useEffect(() => {}, []);

  const resetPassword = (e) => {
    e.preventDefault();
    const data = {
      new_password: markPassword,
      confirm_password: markConfirm,
      otp: markOtp,
    };

    (async () => {
      const res = await routes.auth.reset_password(encodedEmail, data);
      toast.success(res);
      if (res && res.status === 200) toast.success('Password has been reset successfully');
    })();
  };

  return (
    <div className="wrapper-container">
      <Text.Heading text="Reset Password" size={24} weight={500} level={1} />

      <div className="wrapper--email">
        <div className="wrapper--label--email">
          <Text text="Enter OTP" />
        </div>
        <div className="wrapper--input--email">
          <Input.FullRound
            name="otp"
            type="text"
            placeholder="1234"
            id="txtOtp"
            onChange={(e) => setMarkOtp(e.target.value)}
          />
        </div>
      </div>
      <div className="wrapper--email">
        <div className="wrapper--label--email">
          <Text text="Enter your new Password" />
        </div>
        <div className="wrapper--input--email">
          <Input.FullRound
            name="password"
            type="password"
            placeholder="Abc123."
            id="txtPassword"
            onChange={(e) => setMarkPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="wrapper--email">
        <div className="wrapper--label--email">
          <Text text="Re-type your new Password" />
        </div>
        <div className="wrapper--input--email">
          <Input.FullRound
            name="confirmPassword"
            type="password"
            placeholder="Abc123."
            id="txtConfirm"
            onChange={(e) => setMarkConfirm(e.target.value)}
          />
        </div>
      </div>
      <Button stretch btnType="primary" text="Reset Password" onClick={resetPassword} />
    </div>
  );
};
