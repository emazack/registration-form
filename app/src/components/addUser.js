import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Add(props) {
    let navigate = useNavigate();

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
                if (error.response.data && error.response.data.lenght > 0) {
                    error.response.data.forEach(element => {
                        console.table(element);
                    });
                }
            })
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
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="d-flex justify-content-center mb-3">
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
                <button onClick={addUser} className="btn btn-sm btn-success mb-2" type='submit'>Add</button>
            </div>

        </form>
    )
}

