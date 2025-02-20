import "./About.css";
<<<<<<< HEAD
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
=======
import VRIMage from "../../assets/vr.png"
import PersonnelImage from "../../assets/pic-1.png";
import { ourApproaches, whyChooseUs } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../util";
import { Link } from "react-scroll";
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="left-column">
                    <div className="spotlight" />
                    <div className="vision-container">
                        <div className="vision-item">
                            <div className="vision-contenct">
>>>>>>> 48be33db3fd162fba3f9b06a05de8b180c932058
                                <h2>Our Vision</h2>
                                <h4 className="title">Transforming Technology into Progress</h4>
                                <p className="description">Our vision is to empower businesses with practical,
                                    cutting-edge IT solutions that drive growth, streamline
                                    processes, and enhance competitiveness.</p>
                            </div>
<<<<<<< HEAD
                            <div className="image-container" >
=======
                            <div className="image-container">
>>>>>>> 48be33db3fd162fba3f9b06a05de8b180c932058
                                <img
                                    src={VRIMage}
                                    alt="" />
                            </div>
<<<<<<< HEAD
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
=======
                        </div>
                        <div className="vision-item">
                            <div className="spotlight" />


                            <div className="vision-contenct">
                                <h2>Who We Are</h2>
                                <h4 className="title">Your Trusted Technology Partner</h4>
                                <p className="description">We are experienced IT professionals delivering tailored tech
                                    solutions to meet each client’s unique goals.</p>
                            </div>
                            <div className="image-container">
                                <img
                                    src={PersonnelImage}
                                    alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="why-choose-us-container">
                        {whyChooseUs.map((list, index) => (
                            <div
                                className="blur why-choose-us"
                                style={{ background: convertHexToRgba("#FFFFFF", 0.3) }}  // Replace with actual hex color
                                key={index}
                            >
                                <div className="icon">
                                    <img src={list.imageIcon} alt={list.title} />
                                </div>
                                <h3 className="title">{list.title}</h3>
                                <p className="description">{list.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-column">
                    <h2 className="title"> Our Approach</h2>
                    <div className="boxes=wrapper">
                        {ourApproaches.map((approach, index) => (
                            <div className="approach" key={index}>
                                <div className="icon" style={{ ...cssPerfectShape(50, 50), background: convertHexToRgba("--primary", 0.1), }}>
                                    <approach.icon />
                                </div>
                                <div>
                                    <h3 className="title">{approach.title}</h3>
                                    <p className="description">{approach.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="contact-us">
                            <h2 className="title">
                                Reach out to see how IT solutions can boost your success
                            </h2>
                            <Link to="contact" smooth={true} className="btn primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
>>>>>>> 48be33db3fd162fba3f9b06a05de8b180c932058
}

export default About;