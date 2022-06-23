import React, { useState } from 'react';
import { Text, Input, Button, Loader } from 'components';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';
import api from 'apis/routes';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

export const SignUp = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData2 = new FormData();
    formData2.append('first_name', formData.first_name);
    formData2.append('last_name', formData.last_name);
    formData2.append('email', formData.email);
    formData2.append('password', formData.password);
    const res = await api.auth.register(formData2);
    setSuccess(true);

    // toggle to another view

    if (res.status === 201) {
      navigate('/signup2');
    } else {
      toast.success('Email already registered');
    }
  };

  return (
    <div>
      {isSuccess ? (
        <div style={{ position: 'relative' }}>
          Hi there, We’ve sent an email to you. Kindly activate your account from the link in the email sent.
          <Loader absolute />
        </div>
      ) : (
        <form style={{ position: 'relative' }} onSubmit={onSubmit}>
          <div className="signup-wrapper-signup-title">
            <Text.Heading text="Sign Up" size={24} weight={500} level={1} />
          </div>
          <div className="signup-wrapper-name">
            <div className="signup-col-firstname">
              <Text.Heading text="First Name" size={16} weight={450} level={3} />
              <Input.HalfLeftRound name="first_name" type="text" placeholder="" onChange={onHandleChange} />
            </div>
            <div className="signup-col-lastname">
              <Text.Heading text="Last Name" size={16} weight={450} level={3} />
              <Input.HalfRightRound name="last_name" type="text" placeholder="" onChange={onHandleChange} />
            </div>
          </div>
          <div className="signup-wrapper-email">
            <Text.Heading text="Email Address" size={16} weight={450} level={3} />
            <Input.FullRound type="email" name="email" placeholder="" onChange={onHandleChange} />
          </div>
          <div className="signup-wrapper-phone">
            <Text.Heading text="Phone Number" size={16} weight={450} level={3} />
            <Input.PhoneInput name="phonenumber" placeholder="" onChange={onHandleChange} />
          </div>
          <div className="signup-wrapper-password">
            <Text.Heading text="Set a Password" size={16} weight={450} level={3} />
            <Input.FullRound type="password" name="password" placeholder="" onChange={onHandleChange} />
          </div>
          <div className="signup-wrapper-button">
            <Button.MainGreen text="Sign Up" />
          </div>
          <div className="signup-wrapper-divider">
            <Text.Divider text="OR" />
          </div>
          <div className="signup-wrapper-google-button">
            <Button.GoogleBtn text="Continue with Google" />
          </div>
          <div className="signup-main-footer-text">
            <Text.Heading text="Already have an account?" color="grey" size={14} weight={500} level={4} />
            <Link to="/">
              <Text.Heading text="Sign In" color="green" size={14} weight={500} level={4} />
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
