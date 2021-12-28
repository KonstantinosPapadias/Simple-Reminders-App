import React from 'react';
import Form from "../Form/Form";
import "./SigninForm.css";

export default function SigninForm() {
    return (
        <div className='page-container'>
            <div className='form-container'>
                <h3 className='form-header'>Sign in</h3>
                <Form formAction="http://localhost:5000/api/auth/signin" />
            </div>
        </div>
    )
}
