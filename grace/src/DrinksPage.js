import React, { Component } from 'react';
import { apiUrl } from './API.js'
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

  render() {
    console.log(this.state.drinks);
    return (
      <ul className='DrinkList'>
        {this.state.drinks.map((item) => <DrinkItem name={item.name}/>)}
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
      <div className='DrinkTextContainer'>
        <p className='DrinkItemText'>
          {props.name}
        </p>
      </div>
    </div>
  );
}
