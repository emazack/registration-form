import { Link } from 'react-router-dom';

export default function Index() {

    return (
        <div className='link-container'>
            <Link to="/add" className="">Add User</Link>
            <Link to="/show" className="">Manage Users</Link>
        </div>
    )
}

