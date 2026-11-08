import React from "react";
import mdDpImage from '../Image/Md-DP.jpg';
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../CSS/List.css';
const List=()=>{
    return(
        <>
          <header>
            <div className="Container container-flex">
                <div className="LogoContainer">
                    <img src={mdDpImage} alt="MD logo" className="logo header-image"/>
                </div>
                <nav>
                    <div className="list">
                       <NavLink end to="/" className={({ isActive }) => `listname${isActive ? " listitem-active" : ""}`}>Home</NavLink>
                       <NavLink to="/about" className={({ isActive }) => `listname${isActive ? " listitem-active" : ""}`}>About</NavLink>
                       <NavLink to="/services" className={({ isActive }) => `listname${isActive ? " listitem-active" : ""}`}>Services</NavLink>
                       <NavLink to="/contact" className={({ isActive }) => `listname${isActive ? " listitem-active" : ""}`}>Contact</NavLink>
                       <NavLink to="/policy" className={({ isActive }) => `listname${isActive ? " listitem-active" : ""}`}>Policy</NavLink>
                    </div>
                </nav>
                <div className="Icones">
                    <SearchIcon className="Icone"/>
                    <PersonIcon className="Icone"/>
                    <LocalPhoneIcon className="Icone"/>
                </div>
            </div>
          </header>
        </>
    )
}

export default List;