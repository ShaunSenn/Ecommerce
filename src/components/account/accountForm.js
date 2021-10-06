import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

// import history from '../../history';

class AccountForm extends Component {
    render() {
        const{ className, handleSubmit } = this.props;
    
        return (
            <form onSubmit={handleSubmit} className={`${className} reset-password`}>
                <Field 
                    className='reset-password__old-password' 
                    type='password' 
                    title='Old Password' 
                    placeholder='Old Password' 
                    name='Old Password' 
                    component={FormInput}
                />

                <Field 
                    className='reset-password__new-password' 
                    type='password' 
                    title='New Password' 
                    placeholder='Password' 
                    name='New Password' 
                    component={FormInput}
                />

                <div className="reset-password__confirm-password"></div>
                <Field 
                    className='reset-password__confirm-password' 
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    name='Confirm Password' 
                    component={FormInput}
                />
            </form>
        )
    }
}


AccountForm = reduxForm({
    form: 'AccountForm'
})(AccountForm);

export default AccountForm;