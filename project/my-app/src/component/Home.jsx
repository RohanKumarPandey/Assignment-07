import { Link } from 'react-router-dom';
import '../App.css'
function Home() {
    return (
        <>
        <nav>
            <div className="flex">
                <ul>
                    <Link to={'/'}>
                    <li>Home</li>
                    </Link>
                    <Link to={'/about'}>
                    <li>    About</li>
                    </Link>
                    <Link to={'/contact'}>
                    <li>    Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
            <h1>Welcome to the Home Page!</h1>
        </>
    );
}

export default Home;
