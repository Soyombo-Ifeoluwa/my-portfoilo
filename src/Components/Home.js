import Header from "../Navigation/Header.js";
import Bar from "../Components/Sidebar.js";
import Skills from "./Skills.js";

const Home = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="details">
        <div>
            <h2>
               Hi, I'm
            </h2>
            <h2>
             SOYOMBO IFEOLUWA RUTH
            </h2>
          <p className="d-details">
            I am a web developer with an experience in front-end engineering. I
            specialize
            <br />
            in HTML,CSS ,JavaScript and some other languages. I have a strong
            creative skills <br />
            and I'm extremely motivated to deliver high-quality,user-friendly
            and applications..
          </p>
        </div>
        <div className="img">
          <img src="./Assets/picture.jpeg" alt="my pic" className="image" />
        </div> 
      </div>

      <div id="icon">
       <div className="social">
        <div>
        <Bar/>
      </div>
      <div>
        <Skills/>
      </div>
      </div>
      <div className="cv">
        <h2>Download My CV <a href="file:///C:/Users/user/Downloads/Turquoise%20White%20Simple%20Physician%20CV%202.pdf">here</a></h2>
      </div>
      </div>
    </section>
  );
};

export default Home;
