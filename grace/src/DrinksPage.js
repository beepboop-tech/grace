import React, { Component } from 'react';
import { apiUrl, postJSON, getImageSearchJSON } from './API.js'
import './App.css';

export default class DrinksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    }
  }

  componentDidMount() {
    fetch(apiUrl('/api/drinks/'))
      .then(resp => resp.json())
      .then(json => this.setState({drinks: json.drinks || []}))
      .catch(err => console.log(err));
  }

  _onDrinkClicked(drink) {
    postJSON('/api/orders/', { ref: drink.ref })
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

class DrinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'https://i2-prod.birminghammail.co.uk/incoming/article6106309.ece/ALTERNATES/s615/JS26160344.jpg'
    };
  }

  componentDidMount() {
    getImageSearchJSON(this.props.name)
      .then(json => json.hits[0].webformatURL)
      .then(url => { console.log(`GOT: ${url}`); this.setState({imageUrl:url}) })
      .catch(console.log);
  }

  render() {
    return (
      <div className='DrinkItem' onClick={this.props.onClick}>
        <img
          src={this.state.imageUrl}
          alt=''
          className='DrinkImage'
        />
        <div className='DrinkTextContainer'>
          <p className='DrinkItemText'>
            {this.props.name}
          </p>
        </div>
      </div>
    );
  }
}
