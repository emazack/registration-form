import React, { useState } from 'react';
import axios from 'axios';


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const MY_TOKEN = "791c3fed1a4a35e204a631f55c5a92ec627644c2de78e6de53bd06e886fe44f8";

    const handleChange = (event) => {
        if (event.target.name === "firstName") {
            setFirstName(event.target.value);
        } else if (event.target.name === "lastName") {
            setLastName(event.target.value);
        } else if (event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.target.name === "gender") {
            setGender(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(gender);
        console.log(email);
    };

    const createUser = (event) => {
        axios.post(`https://gorest.co.in/public/v2/users`, {
            // name: `${firstName} ${lastName}`,
            name: "Nome Fittizio",
            email: "prova1@gmail.com",
            gender: "male",
            status: "inactive"
        },
            {
                headers: {
                    Authorization: `Bearer ${MY_TOKEN}`
                }
            })
            .then((result) => {
                console.log(result.data);
            })
            .catch((error) => {
                if (error.response.data && error.response.data.lenght > 0) {
                    error.response.data.forEach(element => {
                        console.table(element);
                    });
                }
            })
    };

    const getUser = (event) => {
        axios.get(`https://gorest.co.in/public/v2/users`,
            {
                headers: {
                    Authorization: `Bearer ${MY_TOKEN}`
                }
            })
            .then((response) => {
                console.log(response.data);;
            })
    };

    // createUser();
    // getUser();

    return (
        <form onSubmit={handleSubmit} action="" method="post">

            <div className="container-field">
                <label className="label-field-form" htmlFor="form-firstname">
                    First name
                </label>
                <input
                    required
                    id="form-firstname"
                    className="input-field"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleChange}
                />
            </div>

            <div className="container-field">
                <label className="label-field-form" htmlFor="form-lastname">
                    Last name
                </label>
                <input
                    required
                    id="form-lastname"
                    className="input-field"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={handleChange}
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
                    value={email}
                    onChange={handleChange}
                />
            </div>

            <div className="gender-container">
                <select
                    required
                    name="gender"
                    id="form-gender"
                    className="form-gender"
                    value={gender}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="male">Male</option>
                    <option value="famale">Famale</option>
                </select>
            </div>

            <div className='button-container'>
                <button type='submit'>Send</button>
            </div>

        </form>
    )
}

