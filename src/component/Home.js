import React from "react";
import { NavLink } from "react-router-dom";
import AnarLogo from "../Image/Anar_logo.jpg";
import "../CSS/HomeAbout.css";

const Home = () => {
    return (
        <>
            <div className="mainsection">
                <div className="containbox">
                    <h1>Welcome to MD Fruits</h1>
                    <p>
                        “Discover the delicious fruits we grow on our family farm in India.
                        Lets Join with us for the Enjoy the climatic fruit's and they're tested.
                        Fruits and trees the backbone of healthy life”
                    </p>

                    <div className="BTNBox">
                        <div className="Btn">
                            <NavLink to="/about" className="ReadMore">Read More</NavLink>
                        </div>
                    </div>
                </div>

                <div className="home-image-container">
                    <img src={AnarLogo} alt="Anar logo" className="home-image logo-image" />
                </div>
            </div>
        </>
    );
};

export default Home;