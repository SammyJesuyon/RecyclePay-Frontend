import React from 'react';
import { AuthLayout } from 'layouts';
import { Text, Button, Loader } from 'components';

export const SignUpLoading = () => (
  <AuthLayout>
    <Text size={24}>We’ve sent an email to you. Kindly activate your account from the link in the email sent.</Text>
    <Loader />
    <Button stretch btnType="primary" text="Yes, continue" />
  </AuthLayout>
);
