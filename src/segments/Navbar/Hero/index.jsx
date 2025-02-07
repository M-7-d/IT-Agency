import "./Hero.css"
import { convertHexToRgba } from "../../../util";
import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import heroImage from "../../../assets/hero.png";
import BoxAnimation from "../../../assets/BoxAnimation"

const Hero = () => {
    return (<section id="hero">
        <BoxAnimation/>
        <div className="container">
            <div>
                <h4 className="text-primary hero-subtitle" style={{ background: convertHexToRgba("--primary", 0.2) }}>
                    Dijital Innovation And Expansion
                </h4>
                <h1 className="hero-title">Build, Innovate, And Transform with Us</h1>
                <p className="hero-description">atawave brings your ideas to life with custom software, web, and
                    mobile solutions. From concept to launch, we drive your business
                    forward.
                    </p>
                    <div className="buttons-wrapper"> 
                        <Link 
                        to="contact" 
                        smooth={true} 
                        className="btn primary">
                        Get started
                        <FaArrowTrendUp/>
                        </Link>

                        <Link 
                        to="projects" 
                        smooth={true} 
                        className="btn">
                        See Our Work 
                        <FaProjectDiagram/>
                        </Link>
                        </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="" />
            </div>
        </div>
    </section>);
}

export default Hero;