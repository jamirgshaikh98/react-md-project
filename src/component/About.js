import React from "react";
import Owner from "../Image/Fuiets.jpg";
import Lab1 from "../Image/Fruiet_2.jpg";
import Lab2 from "../Image/Fr_3.jpg";
import Lab3 from "../Image/Fr_4.jpg";
import "../CSS/About.css";

const galleryImages = [Owner, Lab1, Lab2, Lab3];

const Aboute = () => {
    return (
        <>
            <div className="containbox1">
                <div className="about-image-container">
                    {galleryImages.map((image, index) => (
                        <img key={index} src={image} alt={`Fruit gallery ${index + 1}`} className="about-image" />
                    ))}
                </div>

                <p className="about-product-text">
                    We are providing the fresh product from farmer to customer and shopkeeper and also to the dealer,
                    who can supply our product to the world.
                </p>
            </div>
        </>
    );
};

export default Aboute;