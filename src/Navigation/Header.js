import {Link} from 'react-router-dom'


const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="nav">Home</Link>
            <Link to="/projects" className="nav">Project</Link>
        </div>
    )
}


export default Header;