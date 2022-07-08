import { Component } from 'react';

import classes from './Card.module.css';

class Card extends Component {
  render() {
    return (
      <div
        className={`${classes.card} ${
          this.props.active ? classes.active : null
        } ${this.props.style}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
