import React from "react";
import "../CSS/Policy.css";

const Policy = () => {
    return (
        <main className="policy-page">
            <h1 className="policy-title">Our Policy</h1>
            <p className="policy-intro">
                We aim to provide fresh fruits, reliable service, and a simple payment
                experience for every customer.
            </p>

            <div className="policy-sections">
                <section className="policy-section">
                    <h2>Service Policy</h2>
                    <ul>
                        <li>We select and pack fresh, good-quality fruits for every order.</li>
                        <li>Orders are prepared and delivered according to product availability and location.</li>
                        <li>Customers should check their order when it is received and contact us promptly about any issue.</li>
                        <li>Delivery times may change because of weather, traffic, or fruit availability.</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>Payment Method</h2>
                    <ul>
                        <li>Payment can be made by cash on delivery or another payment method confirmed with our team.</li>
                        <li>For large or bulk orders, we may request advance payment before preparing the order.</li>
                        <li>An order is confirmed after the payment details and delivery information are verified.</li>
                        <li>Customers should keep their payment receipt or transaction reference for future support.</li>
                    </ul>
                </section>

                <section className="policy-section">
                    <h2>Returns and Refunds</h2>
                    <ul>
                        <li>Please report damaged or incorrect products as soon as possible after delivery.</li>
                        <li>After review, we may offer a replacement or refund for eligible products.</li>
                        <li>Refund timing depends on the payment method used.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default Policy;