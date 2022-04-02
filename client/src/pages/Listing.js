import React from 'react';
import '../styles/listingStyles.css';
import ItemView from '../components/ItemView'

const Cart = () => {
    return (
        <div id='page-container'>

            <div className='top-bar'>

                <div id='filters-title'>
                    <h3 className='bold'>
                        Filters
                    </h3>
                </div>

                <div id='list-area'>
                    <div>
                        <h3 id='list-title' className='bold'>Results</h3>
                    </div>
                    <div id='sorting'>
                        <p>Sort by:
                            <select id="select-sort-by">
                                <option value="mr">Most Relevant</option>
                                <option value="lp">Lowest Price</option>
                                <option value="hp">Highest Price</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>

            <div className='page-con'>
                <div className='filter-con'>
                    <div>
                        <p>Text</p>
                    </div>
                </div>

                <div className='listings-con'>
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
                    <div className='item'>
                        <ItemView/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
