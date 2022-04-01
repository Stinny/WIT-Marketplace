import React, { useReducer, useState } from 'react';
import '../styles/sellStyles.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
            apple: '',
            count: 0,
            name: '',
            'gift-wrap': false,
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

function CreateProduct() {
    const [formData, setFormData] = useReducer(formReducer, {
        //Set default data
        stock: 1
    });
    const [submitting, setSubmitting] = useState(false);

    const validate = e => {
        //e.preventDefault();
        //Validate input
    }

    const updateChange = e => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

    return(
        <div className="wrapper">
            <h1 id='pageTitle'>Just a couple questions</h1>
            <form onSubmit={validate}>
                <fieldset>
                    <label>
                        <p>Add Title</p>
                        <input id="productTitle" name="name" onChange={updateChange} value={formData.name || ''}/>
                    </label>
                    <label>
                        <p>Price</p>
                        <input name="price" onChange={updateChange} value={formData.price || ''}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Pictures</p>
                        <input name="pictures" onChange={updateChange} placeholder="How do we add them?" value={formData.pictures || ''}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Condition</p>
                        <select name="condition" onChange={updateChange} value={formData.condition || ''}>
                            <option value="">--New or used?--</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>
                    </label>
                    <label>
                        <p>Available Stock</p>
                        <input id="stock" type="number" name="stock" onChange={updateChange} step="1" value={formData.stock || ''}/>
                    </label>
                </fieldset>

                <fieldset>
                    <label>
                        <p>Description</p>
                        <textarea id="des" name="des" onChange={updateChange} value={formData.des || ''}
                                  placeholder="Describe your item thoroughly, buyers love information."/>
                    </label>
                </fieldset>



                <button id="sell-button" type="submit" disabled={submitting}>DONE</button>
            </form>
        </div>
    )
}

export default CreateProduct;