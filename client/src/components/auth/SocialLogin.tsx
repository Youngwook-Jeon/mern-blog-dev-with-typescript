import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { googleLogin } from '../../redux/actions/authAction';

const SocialLogin = () => {
  const dispatch = useDispatch();

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleLogin(id_token));
  }

  return (
    <div className="my-2">
      <GoogleLogin 
        client_id='773941006200-i55fn7k0op57rdu19pmomej5nv9nnvnu.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
        longtitle={false}
      />
    </div>
  );
};

export default SocialLogin;