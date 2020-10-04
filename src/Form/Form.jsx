import React from 'react';

const Form = (
  handleChange,
  handleSubmit
) => {
  return (
    <form>
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
    </form>
  )
}

export default Form;