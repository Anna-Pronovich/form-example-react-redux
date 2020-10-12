import React, { useState } from 'react';
// import { Form } from '../../components';
import { IRegistrationPageProps } from "./RegistrationPageTypes";

const RegistrationPage: React.FC<IRegistrationPageProps> = ({ registerUser }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setUser(user => ({ ...user, [id]: value }));
    }

    const handleSubmit = () => {
         registerUser(user) 
    }
    
    return (
        < >
            <h1>Registration Page</h1>
            {/* <Form registerUser={registerUser}/> */}
            <div >
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        className=""
                        placeholder="first name"
                        id="firstName"
                        onChange={handleChange} />
                </div>
                <div className="">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        className=""
                        placeholder="last name"
                        id="lastName"
                        onChange={handleChange} />
                </div>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className=""
                        placeholder="email"
                        id="email"
                        onChange={handleChange} />
                </div>
                <div className="">
                    <label htmlFor="checkbox">Accept terms</label>
                    <input
                        type="checkbox"
                        className=""
                        id="checkbox"
                        value="accept-term"
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}

export default RegistrationPage;