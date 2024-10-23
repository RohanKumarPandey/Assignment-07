import { Link } from "react-router-dom"

function Contact(){
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
        <h1>Welcome to Contact page</h1>
        </>
    )
}

export default Contact