import React from 'react';
import "./Form.css";

function Form(props) {
    return (
        <div>
            <form className="form-container" action={props.formAction} method="post">
                <div className='form-input-container'>
                    <input className='form-input' type="text" name="username" placeholder="Username" />
                </div>
                <div className='form-input-container'>
                    <input className='form-input' type="password" name="password" placeholder="Password" />
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Form;


