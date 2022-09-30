
export default function Update(props) {

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
                <option value="famale">Famale</option>
            </select>
        </div>

        <div className='button-container'>
            <button type='submit'>Send</button>
        </div>

    </form>
    )
}

