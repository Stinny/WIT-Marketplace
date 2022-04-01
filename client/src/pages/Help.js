import React from 'react';
import '../styles/help.css';

const AboutUs = () => {
    return (
        <div className='help-con'>
            <div className='help-wrap'>
                <div className= 'help-item'>
                    <h2>How to sell?</h2>
                    <p>
                        <strong> Step 1.  </strong> Sign up or login <br/>
                        <strong> Step 2.  </strong> Press on the sell button <br/>
                        <strong> Step 3.  </strong> Fill in the fields for title, price, pictures, condition, quantity, and description <br/>
                        <strong> Step 4.  </strong> Press done <br/>
                        <strong> Step 5.  </strong> Answer your buyers inquiries <br/>
                    </p>
                </div>
                <div className= 'help-item'>
                    <h2>How to buy?</h2>
                    <p>
                        <strong> Step 1.  </strong> Sign up or login <br/>
                        <strong> Step 2.  </strong> Type your query in the search bar and press search <br/>
                        <strong> Step 3.  </strong> Pick an item <br/>
                        <strong> Step 4.  </strong> Add to cart <br/>
                        <strong> Step 5.  </strong> Go to cart and pay <br/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
