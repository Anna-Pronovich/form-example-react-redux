import React, { useState } from 'react';
import { IFormProps } from "./FormPropTypes";
import './Form.css';

const Form: React.FC<IFormProps> = (
  { registerUser }
) => {
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
    <div className="registration-form">
      <div className="form-container">
        <h2 className="form-title">Registration</h2>
        <div className="form-fields-wrapper">
          <input type="text" id="firstName" className="input" placeholder="First name" onChange={handleChange} />
          <input type="text" id="lastName" className="input" placeholder="Last name" onChange={handleChange} />
          <input type="email" id="email" className="input" placeholder="Email" onChange={handleChange} />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
      </div>
  )
}

export default Form;