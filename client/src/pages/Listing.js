import React, {useEffect} from 'react';
import '../styles/listingStyles.css';
import ItemView from '../components/ItemView'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../api/calls';

const Listings = () => {

    //Load products from database
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        getAllProducts(dispatch);
    }, []);

    let itemId = 0;

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
                        <p>Order by:
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

                    <div id="price-filter">
                        <p className="filters-title">Price filter</p>
                        <button className='filter'>Maximum $100 </button> <br/>
                        <button className='filter'>Minimum $10 </button> <br/>
                        <div id='inline-area'>
                            <input className='price-range' type='text' placeholder='min'/>
                            -
                            <input className='price-range' type='text' placeholder='max'/>
                            <button className='go'>></button>
                        </div>

                    </div>

                    <div id="condition-filter">
                        <p className="filters-title">Condition</p>
                        <button className='filter'>New </button> <br/>
                        <button className='filter'>Used </button> <br/>
                    </div>

                    <div id="brand-filter">
                        <p className="filters-title">Brand</p>
                        <button className='filter'>Apple </button> <br/>
                        <button className='filter'>Samsung </button> <br/>
                        <button className='filter'>Lenovo </button> <br/>
                        <button className='filter'>LG </button> <br/>
                        <button className='filter blue'>See all</button> <br/>
                    </div>

                    <div id="item-specific-filter">
                        <p className="filters-title">Item Specific Filters</p>
                        <p className="filters-title">Filter A</p>
                        <button className='filter'>Option 1 </button> <br/>
                        <button className='filter'>Option 2 </button> <br/>
                        <button className='filter'>Option 3 </button> <br/>
                        <button className='filter'>Option 4 </button> <br/>
                        <button className='filter blue'>See all</button> <br/>

                        <p className="filters-title">Filter B</p>
                        <button className='filter'>Option 1 </button> <br/>
                        <button className='filter'>Option 2 </button> <br/>
                        <button className='filter'>Option 3 </button> <br/>
                        <button className='filter'>Option 4 </button> <br/>
                        <button className='filter blue'>See all</button> <br/>

                        <p className="filters-title">Filter C</p>
                        <button className='filter'>Option 1 </button> <br/>
                        <button className='filter'>Option 2 </button> <br/>
                        <button className='filter'>Option 3 </button> <br/>
                        <button className='filter'>Option 4 </button> <br/>
                        <button className='filter blue'>See all</button> <br/>

                    </div>
                </div>

                <div className='listings-con'>
                    {products.map((product) => (
                        <ItemView className='itemListHome' product={product} itemID={itemId++}
                                  itemSize={"small"}/>
                    ))}
                </div>

            </div>

            <div id='page-select'>
                <div>
                    <button className='filter blue'>previous</button>
                    <button className='filter'>1</button>
                    <button className='filter'>2</button>
                    <button className='filter'>3</button>
                    . . .
                    <button className='filter'>20</button>
                    <button className='filter blue'>next</button>
                </div>
            </div>
        </div>
    );
};

export default Listings;
