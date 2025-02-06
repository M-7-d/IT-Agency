import "./About.css";
import VRIMage from "../../assets/vr.png";
import PersonnelImage from "../../assets/pic-1.png";
import {whyChooseUs} from "../../data"
import {convertHexToRgba} from "../../util"

const About = () => {
    return (<section id="about">
        <div className="container">
            <div className="left-column">
                <div className="spotlight">
                    <div className="vision-container">
                        <div className="vision-itme">
                            <div className="vision-content">
                                <h2>Our Vision</h2>
                                <h4 className="title">Transforming Technology into Progress</h4>
                                <p className="description">Our vision is to empower businesses with practical,
                                    cutting-edge IT solutions that drive growth, streamline
                                    processes, and enhance competitiveness.</p>
                            </div>
                            <div className="image-container" >
                                <img
                                    src={VRIMage}
                                    alt="" />
                            </div>
                            <div className="vision-itme">
                                <div className="vision-content">
                                    <h2>Who We Are</h2>
                                    <h4 className="title"> Your Trusted Technology Partner</h4>
                                    <p className="description">We are experienced IT professionals delivering tailored tech
                                        solutions to meet each client’s unique goals.</p>
                                </div>
                                <div className="image-container" >
                                    <img
                                        src={PersonnelImage}
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="why-choose-us-container">
                            {
                            whyChooseUs.map((list ,index) => (
                                <div className="blur why-choose-us" style={{background: convertHexToRgba("--bg-secondary" ,0.3)}}
                                key={index}>
                                    <div className="icon">
                                        <img 
                                        src={list.imageIcon}
                                        alt="" 
                                        />
                                        </div>
                                        <h3 className="title">{list.title}</h3>
                                        <p className="description">{list.description}</p> 
                                </div>
                          ))}
                        </div>
                </div>
            </div>
        </div>
    </section >

    );
}

export default About;