import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);
  const navigate = useNavigate();

  let errorGoogleMsg;
  let errorFBMsg;

  // Error msg for Google
  if (error) {
    errorGoogleMsg = <div>
        <p style={{color: 'crimson', margitBottom: '10px'}}>Error: {error.message}</p>
      </div>
    
  }
  // Error msg for Facebook
  if (errorFb) {
    errorFBMsg = <div>
        <p style={{color: 'crimson', margitBottom: '10px'}}>Error: {errorFb.message}</p>
      </div>
    
  }

  // Google user
  if(user) {
    navigate('/checkout');
  }
  
  // Facebook user
  if(userFb) {
    navigate('/checkout');
  }

	return (
		<>
			<div className="divider">
				<hr />
				<span>or use one of these options</span>
				<hr />
			</div>
			<div className="social-logins">
      {errorGoogleMsg}
      {errorFBMsg}
				<button onClick={() => signInWithGoogle()} className="tutor-btn">
					<FontAwesomeIcon
						className="social-icon"
						icon={faGoogle}
					></FontAwesomeIcon>{" "}
					Google
				</button>
				<button onClick={() => signInWithFacebook()} className="tutor-btn">
					<FontAwesomeIcon
						className="social-icon"
						icon={faFacebook}
					></FontAwesomeIcon>{" "}
					Facebook
				</button>
			</div>
		</>
	);
};

export default SocialLogin;
