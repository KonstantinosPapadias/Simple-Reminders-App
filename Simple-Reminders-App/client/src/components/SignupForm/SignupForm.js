import React from 'react';
import Form from "../Form/Form";
import "../SigninForm/SigninForm.css";

export default function SignupForm() {
    return (
        <div className='page-container'>
            <div className='form-container'>
                <h3 className='form-header'>Sign up</h3>
                <Form formAction="http://localhost:5000/api/auth/signup" />
            </div>
        </div>
    )
}
