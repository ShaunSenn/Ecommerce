import React, { Component } from "react";

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../formFields';

import history from '../../history';

class AccountForm extends Component {

    constructor() {
        super();
        this.state = {
            showPasswords:false
        }
    }

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

                <div key={3} className="account-form__line"></div>,
                {
                    this.state.showPasswords ?
                [
                    <Field 
                    key={0}
                    className='account-form__current' 
                    type='password' 
                    title='Current Password' 
                    placeholder='Current Password' 
                    name='current' 
                    component={FormInput}/>,
                    <Field 
                    key={1}
                    className='account-form__new' 
                    type='password' 
                    title='New Password' 
                    placeholder='New Password' 
                    name='new' 
                    component={FormInput}/>,
                    <Field
                    key={2} 
                    className='account-form__confirm' 
                    type='password' 
                    title='Confirm Password' 
                    placeholder='Confirm Password' 
                    name='confirm' 
                    component={FormInput}/>,
                    <Field
                    key={4} 
                    className='account-form__update-information' 
                    onClick={() => this.setState({showPasswords: false})}
                    type= 'submit'
                    title='Update Information'
                    name='update-information'
                    component={FormButton}/>,
                    <Field
                    key={5} 
                    className='account-form__cancel' 
                    onClick={() => this.setState({showPasswords: false})}
                    type='button'
                    title='Cancel'
                    name='cancel'
                    short={true} 
                    component={FormButton}/>
                ]
                    :
                    <Field 
                    className='account-form__change-password' 
                    onClick={() => this.setState({ showPasswords: true})}
                    type='button'
                    labelTitle='Password'
                    title='Change Password'
                    name='change-password'
                    component={LongGrayButton}/>
                }
            </form>
        )
    }
}


AccountForm = reduxForm({
    form: 'AccountForm'
})(AccountForm);

export default AccountForm;