import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';
import '../styles/AddItem.scss';

/**
 * This is a container that handles adding a new line item to the list of 
 * invoice line items. 
 */
class AddItem extends React.Component {

    /**
     * Construct the component.
     * 
     * @param {*} props - The properties of the component.
     */
    constructor(props) {

        super(props);

        this.state = {
            name: '',
            quantity: '',
            price: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle inputs to fields.
     * 
     * @param {*} event - The event container.
     */
    handleChange(event) {

        this.setState({
            [event.target.id]: event.target.value
        });
    }

    /**
     * Handle adding a new line item to the list of invoice line items. After 
     * the submission, reset each of the input field values.
     * 
     * @param {*} event - The event container.
     */
    handleSubmit(event) {

        event.preventDefault();

        this.props.addItem(this.state.name, this.state.quantity, this.state.price);

        this.setState({
            name: '',
            quantity: '',
            price: ''
        });
    }

    /**
     * Render the component.
     */
    render() {

        return (
            <form onSubmit={this.handleSubmit} className="AddItem">
                <div className="">
                    <input
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Item" />
                </div>
                <div className="">
                    <input
                        id="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        type="number"
                        min="1"
                        step="1"
                        placeholder="Quantity" />
                </div>
                <div className="">
                    <input
                        id="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        type="number"
                        step="0.01"
                        placeholder="Price" />
                </div>
                <div className="">
                    <button type="submit">
                        Add Item
                    </button>
                </div>
            </form>
        );
    }

}

export default connect(null, { addItem })(AddItem);