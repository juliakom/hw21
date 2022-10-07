import React from 'react';
import cat from '../cat.jpg';

const style = {
  block: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '50px',
    border: '2px solid white',
  },
}

export class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.time(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  time() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style={style.block}>
        <h1>Hello, {this.props.name}!</h1>
        <img src={cat} className="cat" alt="cat" />
        <p>Time: {this.state.date.toLocaleTimeString()} </p>
      </div>
    )
  }
}
