import "./Size.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { SiNodedotjs } from "react-icons/si";
import { TbWriting } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="skills">
        <div className="skill">
         <h2>Technical Skills </h2>
       </div>
       <div className="d-icons" >
        <span className="span">
          <FaReact className="icons2" id="a"/>
          <h3>React.js</h3>
        </span>
        <span className="span">
          <SiHtml5 className="icons2" id="b" />
          <h3 className="z">HTML</h3>
        </span>
        <span className="span">
          <IoLogoCss3 className="icons2" id="c" />
          <h3>CSS</h3>
        </span>
        <span className="span">
          <SiJavascript className="icons2" id="d" />
          <h3 className="z">JavaScript</h3>
        </span>
        <span className="span">
          <IoLogoVue className="icons2" id="e"/>
          <h3>VUE</h3>
        </span>
        <span className="span">
          <SiNodedotjs className="icons2" id="f"/>
          <h3 className="z">Node.js</h3>
        </span>
        <span className="span">
          <TbWriting className="icons2" id="g"/>
          <h3>Technical Writing</h3>
        </span>
      </div>
    </div>
  );
};

export default Skills;
