import React from "react";
import "../CSS/Services.css";

const servicesData = [
  {
    title: "Pomegranate",
    description:
      "Our pomegranates are handpicked for their juicy seeds, rich color, and natural sweetness. They are packed with antioxidants and are perfect for fresh eating, juices, and healthy snacks.",
    icon: "🍊",
  },
  {
    title: "Grapes",
    description:
      "We provide fresh, farm-grown grapes that are crisp, juicy, and naturally sweet. Ideal for daily consumption, fruit platters, and family meals, our grapes are selected for premium quality.",
    icon: "🍇",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Fruit Details</h1>
      <p className="services-subtitle">
        Fresh quality fruits selected for taste, nutrition, and satisfaction.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
