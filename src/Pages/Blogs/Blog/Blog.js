import React from "react";
import "./Blog.css";

const Blog = () => {
	return (
		<>
			<article className="blog-container">
				<h3>
					<span>Q.1:</span> What is the difference between authorization and
					authentication?
				</h3>
				<p>
					<span>Ans: </span>Authorization is the process of granting a user
					login/logout configured on the online system that allocating the user
					privileges on the resource. On the other hand, Authentication is the
					process of protecting the validity of the user account by testing that
					the user accessing the online system is who s/he says s/he is.
				</p>
			</article>
			<article className="blog-container">
				<h3>
					<span>Q.2:</span> Why are you using firebase? What other options do you have to implement authentication?
				</h3>
				<p>
					<span>Ans: </span>Firebase supports authentication using email, password, phone numbers. Not only that it provides popular authentication like Google, Facebook, GitHub, Twitter, Apple, and more. Firebase also provides backend services, hosting and ready-made UI libraries to authenticate users to the created app. 
          Besides Firebase authentication, there are different types of authentication process. Some of are, Password-based authentication or personal identification number (PIN), Biometric authentication, Multi-factor authentication, Certificate-based authentication, Token-based authentication etc. 
				</p>
			</article>
			<article className="blog-container">
				<h3>
					<span>Q.3:</span> What other services does firebase provide other than authentication?
				</h3>
				<p>
					<span>Ans: </span>Besides authentication, other services of firebase are: 
				</p>
        <ul style={{marginLeft: '70px'}}>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
        </ul>
			</article>
		</>
	);
};

export default Blog;
