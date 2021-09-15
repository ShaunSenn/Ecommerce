import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

class Signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                Sign in?
            </div>
        )
    }
}


Signin = reduxForm({
    form: 'SignIn'
})(Signin);

export default Signin;