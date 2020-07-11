import React, { Component } from 'react';

import axios from '../../../axios-orders';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault();
    // alert('You continue!');
    this.setState({ loading: true });
    const order = {
      indgredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Karla Gardiner',
        address: {
          street: 'Teststreet 1',
          postCode: 'AB1 2CD',
          country: 'UK'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
          .then( response => {
            this.setState({ loading: false });
          })
          .catch(error => {
            this.setState({ loading: false });
          });
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type='text' name='name' placeholder='Your name' />
          <input className={classes.Input} type='text' name='email' placeholder='Your Email' />
          <input className={classes.Input} type='text' name='street' placeholder='Street' />
          <input className={classes.Input} type='text' name='postCode' placeholder='Post Code' />
          <Button
            btnType='Success'
            clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;
