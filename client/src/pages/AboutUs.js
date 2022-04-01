import React from 'react';
import '../styles/aboutUs.css';

const AboutUs = () => {
    return (
        <div className='aboutUs-con'>
            <div className='aboutUs-wrap'>
                <div>
                    <h2>About WIT Market Place</h2>

                    <p>
                        WIT Marketplace is a page designed to help students like you buy or sell
                        items with the safety that the WIT community means. In order to be a WIT Marketplace
                        member a wit email address is required.

                        The idea is to provide a safe space to buy and sell all kind of items although
                        the page is specially designed to selling school items
                    </p>
                </div>
                <div>
                    <h2>About the team</h2>
                    <p>
                        WIT Marketplace was designed as class project for Web Development class by
                        Justin Mann, Kristopher Bruno, Andrew Johnson and Samuel Hernandez all
                        WIT students in the Computer Science program.
                    </p>
                </div>
                <div>
                    <h2>Thank you!</h2>
                    <p>
                        Thank you for giving our site a try we hope it can accomodate your needs.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
