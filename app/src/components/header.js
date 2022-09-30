import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className='header'>
            <Link to="/" className="link">User manager</Link>
        </header>
    )
}

