import { MemoryRouter } from 'react-router-dom';
import { SignUpPage } from 'pages/Auth/SignUpPage/index';

export default {
  title: 'Sign In',
  component: SignUpPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Register = () => <SignUpPage />;
