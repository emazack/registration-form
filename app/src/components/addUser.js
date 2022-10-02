import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function Add(props) {
    let navigate = useNavigate();

    useEffect(() => {
        props.setFirstName('');
        props.setLastName('');
        props.setEmail('');
        props.setGender('');;
    }, []);

    const addUser = () => {
        axios.post(`https://gorest.co.in/public/v2/users`, {
            name: `${props.firstName} ${props.lastName}`,
            email: props.email,
            gender: props.gender,
            status: "inactive"
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
        <form onSubmit={props.handleSubmit} action="" method="post">

            <div className="mb-3">
                <label className="form-label" htmlFor="form-firstname">
                    First name
                </label>
                <input
                    required
                    id="form-firstname"
                    className="form-control"
                    name="firstName"
                    type="text"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="form-lastname">
                    Last name
                </label>
                <input
                    required
                    id="form-lastname"
                    className="form-control"
                    name="lastName"
                    type="text"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="form-email">
                    Email
                </label>
                <input
                    required
                    id="form-email"
                    className="form-control"
                    aria-describedby="emailHelp"
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
                <button onClick={addUser} className="btn btn-sm btn-success mb-2 mt-2" type='submit'>Add</button>
            </div>

        </form>
    )
}

