import react from "react";
import Home from './Home';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebardata = [
    {
        title: "Home",
        path: "/Home",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    }, 
    // {
    //     title: "Hobbies",
    //     path: "/Hobbies",
    //     icon: <IoIcons.IoIosBody />,
    //     cName: "nav-text"
    // }, 
    {
        title: "Contact me",
        path: "/Contactme",
        icon: <FaIcons.FaDesktop />,
        cName: "nav-text"
    }, 
]