import { Link } from "react-router-dom"

function About(){
    return(
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
        <h1>Welcome to About page</h1>
        </>
    )
}

export default About