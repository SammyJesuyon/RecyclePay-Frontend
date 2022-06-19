import React from 'react';
import { Text } from 'components';
import { ReactComponent as Loading } from './loading.svg';

export const SignUp2 = () => (
  <div>
    <Text size={24}>
      Hi there, We’ve sent an email to you. Kindly activate your account from the link in the email sent.
    </Text>
    <Loading />
  </div>
);
