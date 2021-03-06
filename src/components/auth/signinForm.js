import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import Details from '../details';

import history from '../../history';

class SigninForm extends Component {
    render() {
        const{ className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not Registered? Create Account Here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot Email?',
                onClick: () => console.log('hey there')
            },
            {
                _id: 2,
                title: 'Forgot Password?',
                onClick: () => console.log('hey there')
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field 
                    className='sign-in-form__email' 
                    type='email' 
                    title='Email' 
                    placeholder='Email' 
                    name='email' 
                    component={FormInput}
                />

                <Field 
                    className='sign-in-form__password' 
                    type='password' 
                    title='Password' 
                    placeholder='Password' 
                    name='password' 
                    component={FormInput}
                />

                <div className="sign-in-form__line"></div>
                <Field 
                    className='sign-in-form__login' 
                    type='submit'
                    title='Login'
                    name='login' 
                    component={FormButton}/>
                    <Details className='sign-in-form__details' title='QuickLinks' links={links}/>
            </form>
        )
    }
}


SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;