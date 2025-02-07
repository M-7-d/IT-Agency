import "./Achievement.css";
import Odomoter from "react-odometerjs";
import { useState } from "react";
import { useEffect } from "react";
import "odometer/themes/odometer-theme-default.css"

const Achievement = () => {
    const [clients , setCilents] = useState(0);
    const [satisfaction , setSatisfaction] = useState(0);
    const [projects , setProjects] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCilents(200);
            setSatisfaction(98);
            setProjects(500);
        } ,200);
        return () => clearTimeout(timeout);
    });


    return ( <section id="achievement">
        <div className="container">
            <div className="achievement">
                <p className="sub-title">Trusted By</p>
                <Odomoter value={clients} className="title"/>
                <p className="sub-title">Clients</p>
                <p className="description">Building lasting partnerships through reliable IT services.</p>
            </div>

            <div className="achievement">
                <p className="sub-title">Clients With</p>
                <Odomoter value={satisfaction} className="title"/>
                <p className="sub-title">Satisfaction</p>
                <p className="description">Delivering IT solutions that boost productivity.</p>
            </div>

            <div className="achievement">
                <p className="sub-title">Deployed</p>
                <Odomoter value={projects} className="title"/>
                <p className="sub-title">IT Infrastructures</p>
                <p className="description">Delivered robust IT systems for businesses worldwide.</p>
            </div>
        </div>
    </section> );
}
 
export default Achievement;