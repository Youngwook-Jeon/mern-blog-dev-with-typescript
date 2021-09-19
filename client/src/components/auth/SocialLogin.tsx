import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { googleLogin, facebookLogin } from '../../redux/actions/authAction';
import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

const SocialLogin = () => {
  const dispatch = useDispatch();

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleLogin(id_token));
  }

  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse;
    dispatch(facebookLogin(accessToken, userID));
  }
  
  const onFailure = (error: any) => {
    console.log(error);
  }

  return (
    <>
      <div className="my-2">
        <GoogleLogin 
          client_id='773941006200-i55fn7k0op57rdu19pmomej5nv9nnvnu.apps.googleusercontent.com'
          cookiepolicy='single_host_origin'
          onSuccess={onSuccess}
          longtitle={false}
        />
      </div>

      <div className="my-2">
        <FacebookLogin 
          appId="930059841054718"
          onSuccess={onFBSuccess}
          onFailure={onFailure}
        />
      </div>
    </>
  );
};

export default SocialLogin;