import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Update(props) {

    const [id, setId] = useState(null);

    useEffect(() => {
        setId(localStorage.getItem('id'))
        props.setCompleteName(localStorage.getItem('name'));
        props.setEmail(localStorage.getItem('email'));
        props.setGender(localStorage.getItem('gender'));;
}, []);

const updateUser = () => {
    axios.put(`https://gorest.co.in/public/v2/users/${id}`, {
        name: props.completeName,
        email: props.email,
        gender: props.gender
    },
        {
            headers: {
                Authorization: `Bearer ${props.MY_TOKEN}`
            }
        })
        .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    };

    return (
        <form onSubmit={props.handleSubmit} action="" method="put">

        <div className="container-field">
            <label className="label-field-form" htmlFor="form-completename">
                Name
            </label>
            <input
                required
                id="form-completename"
                className="input-field"
                name="completeName"
                type="text"
                value={props.completeName}
                onChange={props.handleChange}
            />
        </div>

        <div className="container-field">
            <label className="label-field-form" htmlFor="form-email">
                email
            </label>
            <input
                required
                id="form-email"
                className="input-field"
                name="email"
                type="email"
                value={props.email}
                onChange={props.handleChange}
            />
        </div>

        <div className="gender-container">
            <select
                required
                name="gender"
                id="form-gender"
                className="form-gender"
                value={props.gender}
                onChange={props.handleChange}
            >
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div className='button-container'>
            <button onClick={updateUser} type='submit'>Update</button>
        </div>

    </form>
    )
}

