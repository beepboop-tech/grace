import React, { Component } from 'react';
import { apiUrl, postJSON } from './API.js'
import './App.css';

export default class DrinksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    }
  }

  componentDidMount() {
    fetch(apiUrl('/api/drinks'))
      .then(resp => resp.json())
      .then(json => this.setState({drinks: json.drinks}))
      .catch(err => console.log(err));
  }

  _onDrinkClicked(drink) {
    postJSON('/api/orders', {})
      .then(resp => resp.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ul className='DrinkList'>
        {this.state.drinks.map((item) =>
            <DrinkItem
              name={item.name}
              onClick={this._onDrinkClicked.bind(this, item)}
              key={item.ref}
            />)}
      </ul>
    );
  }
}

function DrinkItem(props) {
  return (
    <div className='DrinkItem' onClick={props.onClick}>
      <img
        src='https://realhousemoms.com/wp-content/uploads/Manhattan-Drink-IG.jpg'
        alt=''
        className='DrinkImage'
      />
      <div className='DrinkTextContainer'>
        <p className='DrinkItemText'>
          {props.name}
        </p>
      </div>
    </div>
  );
}
