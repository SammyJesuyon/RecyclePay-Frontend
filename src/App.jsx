import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { AuthLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ResetPasswordPage,
  SignInPage,
  SignUpPage,
  VerifyPage,
  CollectorOne,
  CollectorTwo,
  CollectorThree,
  CollectorFour,
  // OverviewPage,
} from 'pages';
import { AuthNotFoundPage, ForgotPasswordPage } from 'pages/Auth';

// for dashboard
const PrivateOutlet = () => {
  const { isAuthorized: isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    // <DashboardLayout>
    <div>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
    // </DashboardLayout>
  );
};

// for auth routes - login, signup forget password ...
const ProtectedOutlet = () => {
  const { isAuthorized: isAuth } = useSelector((state) => state.auth);
  return !isAuth ? (
    <AuthLayout>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </AuthLayout>
  ) : (
    <Navigate to="/dashboard" />
  );
};

const VerifyOutlet = () => <Outlet />;
const ResetOutlet = () => <Outlet />;

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<ProtectedOutlet />}>
        <Route index element={<SignInPage />} />
        <Route path={ROUTES.signIn.path} element={<SignInPage />} />
        <Route path={ROUTES.verify.path} element={<VerifyOutlet />}>
          <Route path={ROUTES.verifyEncoded.path} element={<VerifyPage />} />
        </Route>
        <Route path={ROUTES.signUp.path} element={<SignUpPage />} />
        {/* <Route path={ROUTES.CollectorOne.path} element={<CollectorOne />} /> */}
        <Route path={ROUTES.CollectorTwo.path} element={<CollectorTwo />} />
        <Route path={ROUTES.CollectorThree.path} element={<CollectorThree />} />
        <Route path={ROUTES.CollectorFour.path} element={<CollectorFour />} />
        <Route path={ROUTES.forgotPassword.path} element={<ForgotPasswordPage />} />
        <Route path={ROUTES.resetPassword.path} element={<ResetOutlet />}>
          <Route path={ROUTES.resetEncoded.path} element={<ResetPasswordPage />} />
        </Route>
        <Route path="*" element={<AuthNotFoundPage />} />
      </Route>

      <Route path={ROUTES.dashboard.path} element={<PrivateOutlet />}>
        <Route path={ROUTES.overview.path} element={<CollectorOne />} />
        <Route index element={<Navigate to={ROUTES.overview.path} />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Route>
      <Route path="*" element={<div>Not Found!</div>} />
    </Routes>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default App;
