import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Update(props) {

    const [id, setId] = useState(null);
    let navigate = useNavigate();

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
        .then((result) => {
            console.log(result.data);
            navigate('/show');
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

        <div className="mb-3">
            <label className="form-label" htmlFor="form-completename">
                Name
            </label>
            <input
                required
                id="form-completename"
                className="form-control"
                name="completeName"
                type="text"
                value={props.completeName}
                onChange={props.handleChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label" htmlFor="form-email">
                email
            </label>
            <input
                required
                id="form-email"
                className="form-control"
                name="email"
                type="email"
                value={props.email}
                onChange={props.handleChange}
            />
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="form-gender">
                    Gender
                </label>
            <select
                required
                name="gender"
                id="form-gender"
                className="form-select"
                value={props.gender}
                onChange={props.handleChange}
            >
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div className='button-container'>
            <button onClick={updateUser} className="btn btn-sm btn-primary mr-1" type='submit'>Update</button>
        </div>

    </form>
    )
}

