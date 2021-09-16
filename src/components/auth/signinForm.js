import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

class SigninForm extends Component {
    render() {
        const{ className } = this.props;
        return (
            <form className={`${className} signin-form`}>
                Sign in?
            </form>
        )
    }
}


SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;