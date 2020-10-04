import React, {useState} from 'react';
// import Form from '../Form/Form';


const RegisterPage = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const handleChange =(e) => {
        const { name, value } = e.target;

        setUser(user => ({ ...user, [name]: value }));
    }

    return (
        <div >
            <h1>Registration Page</h1>
            <form className="registration-form">
                <div className="input-row">
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        className=""
                        placeholder="first name"
                        id="firstName"
                        name="firstName"
                        onChange={handleChange} />
                </div>
                <div className="input-row">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        className=""
                        placeholder="last name"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange} />
                </div>
                <div className="input-row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="email"
                         />
                </div>

                <button onClick={() => { alert('submit') }}>Submit</button>
            </form>
        </div>
    );
}

export default RegisterPage;
