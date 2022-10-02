import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className='header'>
            <nav className='nav-link'>
                <Link to="/" className="link">User manager</Link>
            </nav>
        </header>
    )
}

