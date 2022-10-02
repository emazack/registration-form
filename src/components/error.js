
export default function Error(props) {

    return (
        <div className="error-container" >
            {props.error && props.error.length > 0 &&
                <ul className="alert alert-warning" role="alert">
                    <button onClick={() =>{props.setError(!props.error)}} type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="alert-heading">Error</h4>
                    {props.error.map((errorMessage, index) =>
                        <li key={index} className="text-container">
                            <p>{errorMessage}</p>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

