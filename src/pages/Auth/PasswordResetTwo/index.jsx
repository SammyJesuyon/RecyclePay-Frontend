import React from 'react';
import { AuthLayout } from 'layouts';
import { ResetTitle, Text, Button } from 'components';

export const PasswordResetTwo = () => (
  <AuthLayout>
    <Text size={20}>Reset password</Text>
    <Text size={24}>
      Weve sent a recovery link to your mail. Kindly open the link we sent to continue to password rest.
    </Text>
    <Button stretch btnType="primary" text="Resend Recovery Link" />
    <ResetTitle />
    <div className="wrapper--email">
      <div className="wrapper--label--email">{/* <LabelText text="Enter your Email Address" /> */}</div>
      {/* <div className="wrapper--input--email">
        <FullDualRoundInput type="email" placeholder="" />
      </div> */}
    </div>
    <Button stretch btnType="primary" text="Send Recovery Link" />
  </AuthLayout>

  // export const PasswordResetTwo = () => (
  //   <AuthLayout>
  //     <Text size={20}>Reset password</Text>
  //     <Text size={24}>
  //       We’ve sent an email to you.
  //       <br /> Kindly activate your account from the link in the email sent.
  //     </Text>
  //     <Button stretch btnType="primary" text="Resend Recovery Link" />
  //   </AuthLayout>
);
