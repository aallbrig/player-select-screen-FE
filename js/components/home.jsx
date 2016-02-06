import React from 'react';

const Home = React.createClass({
  render() {
    const message = 'Bundle.js works! Even bettererer now!';
    return (
      <div>
        <h1>Player Select Screen</h1>
        <p>This site is under construction!</p>
        <div> {message} </div>
      </div>
    )
  }
});

export default Home;