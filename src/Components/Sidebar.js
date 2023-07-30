import "./Size.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import{ NavLink } from "react-router-dom";



const Bar = () =>{
    return(
        <div className="Bar">
                <NavLink to="https://twitter.com/Karis10030053"> <FaTwitter className="icons" id="icon0"/></NavLink>
                <NavLink to="https://github.com/Soyombo-Ifeoluwa"> <AiFillGithub className="icons" id="icon1"/></NavLink>
                <NavLink to="https://www.linkedin.com/in/soyombo-ifeoluwa-4a5717240/"> <AiFillLinkedin className="icons" id="icon2"/></NavLink>
                <NavLink to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbFbLNHZhTHdFMCrkXfNHDHpScqtVqdktHXkSRjVvTWnwpqChTkqWBkzqZdSZBGcGlQnfp"><AiFillMail  className="icons" id="icon3"/></NavLink>
        </div>
    )
}


export default Bar;