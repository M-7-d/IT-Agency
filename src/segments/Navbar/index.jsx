import "./Navbar.css"
import DataWaveLogo from "../../components/DataWaveLogo";
import { navRoutes } from "../../data"
import { Link } from "react-scroll"
import Socials from "../../components/Socials";
import Sidebar from "../../components/Sidebar";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Sidebar open={open} onClose={() => setOpen(!open)} />
            {open && (
                <div className="sidebar-overlay" onClick={() => setOpen(!open)}></div>
            )}
            <nav id="navbar">
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