import React from 'react';
import '../styles/listingStyles.css';
import ItemView from '../components/ItemView'

const Cart = () => {
    return (
        <div id='page-container'>
            <div className='top-bar'>
                    <div id='filters-title'>
                        <h3>
                        Filters
                        </h3>
                    </div>
                    <div id='list-area'>
                        <h3 id='list-title'>Results</h3>
                            <p><strong>Sort by</strong></p>
                            <select id="sort-by">
                                <option value="mr">Most Relevant</option>
                                <option value="lp">Lowest Price</option>
                                <option value="hp">Highest Price</option>
                            </select>
                    </div>
            </div>

            <div class='page-con'>
                <div class='filter-con'>
                    <div class='item'>
                        <p>Text</p>
                    </div>
                </div>

                <div class='listings-con'>
                    <div class='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>
                    <div className='item'>
                        <ItemView/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
