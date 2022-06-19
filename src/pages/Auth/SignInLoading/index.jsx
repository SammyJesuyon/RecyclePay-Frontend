import React from 'react';
import { AuthLayout } from 'layouts';
import { Text, Button, Loader } from 'components';
import './style.css';

export const SignInLoading = () => (
  <AuthLayout>
    <Text size={24}>Sign in Loading... Hi there,</Text>
    <Loader />
    <Button stretch btnType="primary" text="Yes, continue" />
  </AuthLayout>
);
