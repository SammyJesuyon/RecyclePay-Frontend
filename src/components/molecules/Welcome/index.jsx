import { Button, Text } from 'components';

import './style.css';

export const Welcome = () => (
  <div className="intro_body">
    <Text size={16} weight={450}>
      <span>Welcome Ifeanyi Omeata! </span>
      We’re excited to have you contribute to your environmental health today.
    </Text>
    <Button
      round
      btnType="primary"
      onClick={() => {
        window.location.href = '/dashboard/individualTwo';
      }}
    >
      <Text color="white" size={14}>
        {' '}
        Request A PickUp{' '}
      </Text>
    </Button>
  </div>
);

export const Welcome2 = () => (
  <div className="intro_body">
    <Text size={16} weight={450}>
      <span>Great! </span>
      Enter your recyclable materials details below.
    </Text>
    <Button
      round
      btnType="primary"
      onClick={() => {
        window.location.href = '/dashboard/individualThree';
      }}
    >
      <Text color="white" size={14}>
        {' '}
        Request A PickUp{' '}
      </Text>
    </Button>
  </div>
);

export const Welcome3 = () => (
  <div className="intro_body">
    <Text size={16} weight={450}>
      <span>Congratulations! </span>
      Your request has been successfully created.
    </Text>
  </div>
);
