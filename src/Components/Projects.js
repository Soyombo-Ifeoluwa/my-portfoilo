import Header from "../Navigation/Header.js";

const Projects = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <h1 id="h1">MY PROJECTS</h1>
      </div>
      <div className="REPO">
        <div id="p">
          <h1 id="h1">My Repository App</h1>
          <p className="d-details">
            I created this app to show a page with a list of all my repositories
            on GitHub with a form of pagination.
            <p>There is another page that shows
            data for a single repo clicked from the list of repos using nested
            routes and implementation of a wildcard route to catch 404 pages.</p>
          <p>  Check the <a href="https://my-github-repositories.netlify.app/">Website</a>and the codes on <a href="https://github.com/Soyombo-Ifeoluwa/My-Github-Repository">GitHub</a></p>
          </p>
        </div>
        <div>
          <a href="https://my-github-repositories.netlify.app/">
            <img src="./Assets/profile.png" alt="my pic" className="imag" />
          </a>
        </div>
      </div>
      <div className="REPO">
        <div id="p">
          <h1 id="h1">Routers and Errors.</h1>
          <p className="d-details">
            I created this website to shows how routers work and how to create
            routes in react.
            It also shows Error boundary, pagination and a 404
            page.
          <p>  Check the <a href="https://5yqzxv.csb.app/?id=H4O2M3E">Website</a>and the codes on <a href="https://github.com/Soyombo-Ifeoluwa/Router-and-Errors">GitHub</a></p>

          </p>
        </div>
        <div>
          <a href="https://5yqzxv.csb.app/?id=H4O2M3E">
            <img src="./Assets/routers.jpeg" alt="my pic" className="imag" />
          </a>
        </div>
      </div>
      <div className="REPO">
        <div>
            <h1 id="h1">Shopping App Template</h1>
            <p className="d-details">I setup react-router, implement Nested routes, 404 page, and Error boundary.I implemented SEO and Navigation menu that shows on each page.
          <p>  Check the <a href="https://shopping-store-three.vercel.app/">Website</a>and the codes on <a href="https://github.com/Soyombo-Ifeoluwa/Shopping-Store">GitHub</a></p></p>
             
        </div>
      <div>
          <a href="https://shopping-store-three.vercel.app/">
            <img src="./Assets/Shopping.jpeg" alt="my pic" className="imag" />
          </a>
        </div>
      </div>
      <div id="h1" classname="more">
          Click For<a href="https://github.com/Soyombo-Ifeoluwa?tab=repositories">MORE</a> Projects
      </div>
    </section>
  );
};

export default Projects;
