import { Link } from 'react-router-dom';

export default function Index() {

    return (
        <div className='link-container'>
            <Link to="/add" className="btn btn-lg btn-success mb-2">Add User</Link>
            <Link to="/show" className="btn btn-lg btn-primary">Manage Users</Link>
        </div>
    )
}

