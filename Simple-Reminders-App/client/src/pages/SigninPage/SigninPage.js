import {useState} from 'react';
import Form from "../../components/Form/Form";
import "./SigninPage.css";

export default function SigninPage() {
    const [mode, setMode] = useState("signin");

    return (
        <div className='page-container'>
            {mode === "signin"

            ?
                <div className='signin-form-container'>    
                    <h3 className='signin-form-header'>Sign-in</h3>
                    <Form formAction="http://localhost:5000/api/auth/signin" />
                    <div>
                        <h4>Or</h4>
                        <button 
                            className='create-new-account-button'
                            onClick={() => setMode("signup")}>
                                Create a new account
                        </button>
                    </div>
                </div>

            :
                <div className='signup-form-container'>
                    <h3>Sign-up</h3>
                    <Form formAction="http://localhost:5000/api/auth/signup" />
                    <div className='signup-form-little-text'>create an account and stop forgetting important things</div>
                </div>
            }
            
        </div>
    )
}
