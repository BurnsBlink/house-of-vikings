import React from 'react';
import { Link, browserHistory } from 'react-router';

const Home = props => {
  return(
    <div>
      <div className="header">
        <Link id="navbar" to={`/`}>Home</Link>
        <Link id="navbar" to={`/raids`}>Raids</Link>
        <Link id="navbar" to={`/vikingname`}>Receive your Viking Name</Link>
        <Link id="navbar" to={`/norsegods`}>Norse Gods</Link>
        <Link id="navbar" to={`/media`}>Media</Link>
      </div>

      <h1 id="title">House of Vikings</h1>
      <h3 id="titlebelow">The Norse Culture</h3>
      <center><img src="https://image.ibb.co/fmpkak/HoVlogo.png" alt="HoVlogo" id="home-logo" /></center>
      {props.children}
    </div>
  )
}

export default Home;
