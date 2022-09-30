import axios from 'axios';


export default function Create(props) {

    const createUser = () => {
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
            })
            .catch((error) => {
                if (error.response.data && error.response.data.lenght > 0) {
                    error.response.data.forEach(element => {
                        console.table(element);
                    });
                }
            })
    };

    // createUser();

    return (
        <form onSubmit={props.handleSubmit} action="" method="post">

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
                    value={props.firstName}
                    onChange={props.handleChange}
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
                    value={props.lastName}
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
                <button onClick={createUser} type='submit'>Send</button>
            </div>

        </form>
    )
}

