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
                    props.handleDataError(error.response.data);
                } else if (error.request) {
                    props.setError('no response was received by server. Try later')
                } else {
                    props.setError('something went wrong')
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
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="input-group mb-3">
                <div className='input-group-prepend'>
                    <label className="input-group-text" htmlFor="form-gender">
                        Gender
                    </label>
                </div>
                <select
                    required
                    name="gender"
                    id="form-gender"
                    className="custom-select"
                    value={props.gender}
                    onChange={props.handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className='button-container'>
                <button onClick={updateUser} className="btn btn-sm btn-primary mb-2 mt-2" type='submit'>Update</button>
            </div>

        </form>
    )
}

