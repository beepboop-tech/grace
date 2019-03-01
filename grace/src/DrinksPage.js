import React, { Component } from 'react';
import Drink from './Drink.js';
import './App.css';

export default class DrinksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [new Drink("Vodka"), new Drink("Coke")]
    }
  }

  render() {
    return (
      <ul className='DrinkList'>
        {this.state.items.map((item) => <DrinkItem name={item.name}/>)}
      </ul>
    );
  }
}

function DrinkItem(props) {
  return (
    <div className='DrinkItem'>
      <img
        src='https://realhousemoms.com/wp-content/uploads/Manhattan-Drink-IG.jpg'
        className='DrinkImage'
      />
      <p className='DrinkItemText'>
        {props.name}
      </p>
    </div>
  );
}
