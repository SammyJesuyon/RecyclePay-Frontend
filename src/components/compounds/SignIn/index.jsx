import React from 'react';
import { Text, Input, Button, Loader } from 'components';
import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_ACTIONS } from 'store/reducer/auth/authSlice';
import { useFormik } from 'formik';
import { VALIDATIONS } from 'constants/validations';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: VALIDATIONS.email,
  password: VALIDATIONS.password,
});

export const SignIn = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { authUser } = AUTH_ACTIONS;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(authUser(values));
    },
  });

  return (
    <>
      <Loader open={loading} />
      <form style={{ position: 'relative' }} onSubmit={formik.handleSubmit}>
        <div className="signin-wrapper-signin-title">
          <Text.Heading text="Sign In" size={24} weight={500} level={1} />
        </div>
        <div className="signin-wrapper-email">
          <Text.Heading text="Email Address" size={16} weight={450} level={3} />
          <Input.FullRound name="email" type="email" placeholder="" onChange={formik.handleChange} />
          <div>{formik.errors.email && formik.touched.email && formik.errors.email}</div>
        </div>
        <div className="signin-wrapper-password">
          <Text.Heading text="Password" size={16} weight={450} level={3} />
          <Input.FullRound name="password" type="password" placeholder="" onChange={formik.handleChange} />
          <div>{formik.errors.password && formik.touched.password && formik.errors.password}</div>
        </div>
        <div className="signin-wrapper-remember-me">
          <Text.RememberMe />
        </div>
        <div className="signin-wrapper-button">
          <Button type="submit" stretch text="Sign In" />
        </div>
        <div className="signin-wrapper-divider">
          <Text.Divider text="OR" />
        </div>
        <div className="signin-wrapper-google-button">
          <Button.GoogleBtn text="Continue with Google" />
        </div>
        <div className="signin-main-footer-text">
          <Text.Heading text="Don't have an account?" color="grey" size={14} weight={500} level={4} />
          <Link to="/">
            <Text.Heading text="Sign Up" color="green" size={14} weight={500} level={4} />
          </Link>
        </div>
      </form>
    </>
  );
};
