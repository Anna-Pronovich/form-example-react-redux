import React from 'react';
import { Form } from '../../components';
import { IRegistrationPageProps } from "./RegistrationPageTypes";

const RegistrationPage: React.FC<IRegistrationPageProps> = ({ registerUser }) => {
    return (
        <>
            <Form registerUser={registerUser}/>
        </>
    );
}

export default RegistrationPage;