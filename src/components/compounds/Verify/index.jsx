import { Text } from 'components';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ROUTES } from 'constants/routes';
import routes from '../../../apis/routes';

export const Verify = () => {
  const params = useParams();
  useEffect(() => {
    (async () => {
      const res = await routes.auth.verify_user(params.encodedEmail);
      toast.success(res);
    })();
  }, []);

  return (
    <div>
      <Text size={24}>
        Your email has been verified, please click here to <Link to={ROUTES.signIn.fullpath}>sign in</Link>.
      </Text>
    </div>
  );
};
