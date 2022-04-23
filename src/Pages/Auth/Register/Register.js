import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
	const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate('/login');
	}
	if(user) {
		console.log("Updated Profile");
	}

	const handleRegister = async (e) => {
		e.preventDefault();
		toast('Check your email to verify');
		const displayName = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName });
					navigate('/checkout');
	}

  return (
    <div className="login-container">
			<h3>Register</h3>
			<div className="login-area">
				<form onSubmit={handleRegister} className="contact-form">
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						required
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Your password"
						required
					/>
					<input className="tutor-btn" type="submit" value="Create account" />
					<ToastContainer></ToastContainer>
				</form>
				<p><small>Already have an account?</small> <Link to="/login" onClick={navigateToLogin} className="signup">Log in</Link></p>
				<div className="other-login">
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
  );
};

export default Register;