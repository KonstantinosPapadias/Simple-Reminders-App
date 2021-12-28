import React from 'react';
import "./SignoutButton.css";

function SignoutButton() {
    return (
        <div>
            <form action="http://localhost:5000/api/auth/signout" method="get">
                <button className='signout-button' type="submit">Sign out</button>
            </form>
        </div>
    )
}

export default SignoutButton
