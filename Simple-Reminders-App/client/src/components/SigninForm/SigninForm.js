import React from 'react';
import Form from "../Form/Form";
import "./SigninForm.css";

export default function SigninForm() {

    function redirectToSignupForm(event) {
        event.preventDefault();
        console.log("button clicked, should redirect to /signup...");
    }

    return (
        <div className='page-container'>
            <div className='form-container'>
                <h3 className='form-header'>Sign in or <button><a href="http://localhost:3000/signup">Sign up</a></button></h3>
                <Form formAction="http://localhost:5000/api/auth/signin" />
            </div>
        </div>
    )
}
