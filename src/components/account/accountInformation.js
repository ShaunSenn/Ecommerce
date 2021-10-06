import React, { Component } from 'react';
import PageTitle from '../pageTitle';
import AccountForm from './accountForm';

class AccountInformation extends Component {
    
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='account-information'>
                <PageTitle className='account-information' title='Account Information'/>
                <AccountForm className='account-form' title='Account Form'/>
            </div>
        )
    }
}

export default AccountInformation;