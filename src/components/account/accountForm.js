import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../formFields';

import history from '../../history';

class AccountForm extends Component {
    render() {
        const{ className, handleSubmit } = this.props;
    
        return (
            <form onSubmit={handleSubmit} className={`${className} account-form`}>
                <Field 
                    className='account-form__name' 
                    type='name' 
                    title='Name' 
                    placeholder='name' 
                    name='name' 
                    component={FormInput}
                />

                <Field 
                    className='account-form__email' 
                    type='email' 
                    title='Email' 
                    placeholder='email' 
                    name='email' 
                    component={FormInput}
                />

                <Field 
                    className='account-form__address' 
                    type='address' 
                    title='Street Address' 
                    placeholder='Address' 
                    name='address' 
                    component={FormInput}
                />

                <Field 
                    className='account-form__city' 
                    type='city' 
                    title='City' 
                    placeholder='City' 
                    name='city' 
                    component={FormInput}
                />

                <Field 
                    className='account-form__state' 
                    type='state' 
                    title='State' 
                    placeholder='State'
                    name='state' 
                    component={FormInput}
                />

                <Field 
                    className='account-form__zipcode' 
                    type='zipcode' 
                    title='Zipcode' 
                    placeholder='Zipcode' 
                    name='zipcode' 
                    component={FormInput}
                />

                <Field 
                    className='account-form__change-password' 
                    onClick={() => console.log('trying to show passwords')}
                    type='button'
                    labelTitle='Password'
                    title='Change Password'
                    name='change-password'
                    component={LongGrayButton}
                />

                {/* <Field 
                    className='account-form__new-password' 
                    type='new password' 
                    title='New Password' 
                    placeholder='New Password' 
                    name='New Password' 
                    component={FormInput}
                />
                <Field 
                    className='account-form__confirm-password' 
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    name='Confirm Password' 
                    component={FormInput}
                />
                <Field 
                    className='account-form__login' 
                    onClick={() => history.push('/account')}
                    type='submit'
                    title='Submit'
                    name='submit' 
                    component={FormButton}/>
                <Field 
                    className='account-form__login' 
                    onClick={() => history.push('/account')}
                    type='submit'
                    title='Submit'
                    name='submit' 
                    component={FormButton}/> */}
            </form>
        )
    }
}


AccountForm = reduxForm({
    form: 'AccountForm'
})(AccountForm);

export default AccountForm;