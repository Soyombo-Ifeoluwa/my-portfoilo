import "./Size.css" ;
import Bar from "../Components/Sidebar.js";
import Skills from "./Skills.js";
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <section>
       <Helmet>
          <title>Soyombo's Portfoilo</title>
          <link rel="canonical" href="/" />
          <meta name="description" content="Soyombo Ifeoluwa" />
        </Helmet>
      
      <div className="details">
        <div className="Name">
            <h2>
               Hi,I'M</h2>
               <h2>
             SOYOMBO IFEOLUWA
            </h2>
          <p className="Heading">
        A Frontend Web Developer | A Technical Writer
      </p>
      <div>
        <Bar/>
      </div>
        </div>
        <div className="img">
          <img src="./Assets/picture.jpeg" alt="my pic" className="image" />
        </div> 
      </div>
      
      <div className="About">
        <h3>ABOUT ME</h3>

        <p className="d-details">
           A passionate and creative frontend developer with a strong foundation in web technologies.<br/>
           I take pride in crafting beautiful and user-friendly interfaces that deliver seamless user experiences. <br/>
           My journey into the world of web development began with curiosity and a desire to bring ideas to life through code.<br/>
            I am constantly striving to learn and grow,seeking opportunities to contribute my skills to exciting projects<br/> and collaborate with innovative teams.
           
          </p>

          <p className="d-details">
My journey into the world of web development began several years ago,<br/>
 when I stumbled upon videos of people coding and creating apps especially girls,<br/>
  I downloaded apps on Google play store that has to do with coding but I didn't understand things I was doing, so I gave up. <br/>
 I stumbled again on an opportunity to learn online with several people on a platform named Alt_School Africa,<br/>
 so I choose to start my journey in tech from there by diving into the frontend realm.<br/>
  Over time, I honed my skills in JavaScript, React, and other cutting-edge frameworks,<br/>
 allowing me to build dynamic and interactive websites.
           <p>Check out some of my <Link to="/projects" className="project">PROJECTS</Link></p>
           </p>

      </div>

      <div >
       
      <div>
        <Skills/>
      </div>
       
      <div className="cv">
        <h2>Download <a href="./Assets/download.pdf"> My RESUME</a></h2>
      </div>
      </div>
      <div className="version">
        <p>Created by Soyombo Ifeoluwa @ 25.07.2023</p>
      </div>
    </section>
  );
};

export default Home;
