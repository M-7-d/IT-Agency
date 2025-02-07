import "./Navbar.css"
import DataWaveLogo from "../../components/DataWaveLogo";
import { navRoutes } from "../../data"
import { Link } from "react-scroll"
import Socials from "../../components/Socials";
import Sidebar from "../../components/Sidebar";
import { CgMenuRight } from "react-icons/cg";
import { useState ,useMemo } from "react";
import { convertHexToRgba } from "../../util";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const dropNavbar = () => {
        if (window.scrollY > 200) {
            setDrop(true);
        }
        else{
            setDrop(false);
        }
    };

    useMemo(() => {
        window.addEventListener("scroll" , dropNavbar);
        return() => window.removeEventListener("scroll" ,dropNavbar);
    }) ;

    return (
        <>
            <Sidebar open={open} onClose={() => setOpen(!open)} />
            {open && (
                <div className="sidebar-overlay" onClick={() => setOpen(!open)}></div>
            )}
            <nav id="navbar" 
            className={drop ? "blur drop" : ""}
            style={{background:convertHexToRgba("--bg-base" , 0.8)}}
            >
                <DataWaveLogo />
                <div className="route-wrapper">
                    {
                        navRoutes.map((route, index) => (
                            <Link className="route"
                                to={route.id}
                                key={index}
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                offset={-50}
                            >
                                {route.name}
                            </Link>
                        ))
                    }
                </div>
                <Socials />
                <div className="menu" onClick={() => setOpen(!open)}>
                    <CgMenuRight />
                </div>
            </nav>
        </>
    );
}

export default Navbar;  