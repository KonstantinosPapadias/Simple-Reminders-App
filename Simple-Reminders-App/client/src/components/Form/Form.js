import React from 'react';
import "./Form.css";

function Form(props) {
    return (
        <div>
            <form className="form-container" action={props.formAction} method="post">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Form;


