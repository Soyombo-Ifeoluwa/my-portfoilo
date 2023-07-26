import {Link} from 'react-router-dom'


const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="nav">HOME</Link>
            <Link to="/projects" className="nav">PROJECT</Link>
            <a href="./Assets/download.pdf" className="nav"> My RESUME</a>
        </div>
    )
}


export default Header;