import axios from 'axios';


export default function Create(props) {

    const handleChange = (event) => {
        if (event.target.name === "firstName") {
            props.setFirstName(event.target.value);
        } else if (event.target.name === "lastName") {
            props.setLastName(event.target.value);
        } else if (event.target.name === "email") {
            props.setEmail(event.target.value);
        } else if (event.target.name === "gender") {
            props.setGender(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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

    const getUser = (event) => {
        axios.get(`https://gorest.co.in/public/v2/users`,
            {
                headers: {
                    Authorization: `Bearer ${props.MY_TOKEN}`
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
                    value={props.firstName}
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
                    value={props.lastName}
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
                    value={props.email}
                    onChange={handleChange}
                />
            </div>

            <div className="gender-container">
                <select
                    required
                    name="gender"
                    id="form-gender"
                    className="form-gender"
                    value={props.gender}
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

