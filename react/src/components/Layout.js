import React from 'react';
import { Link, browserHistory } from 'react-router';

const Layout = props => {
  return(
    <div>
      <div className="header">
        <Link id="navbar" className="img-replace" to={`/`}>Home</Link>
        <Link id="navbar" to={`/raids`}>Raids</Link>
        <Link id="navbar" to={`/vikingname`}>Receive your Viking Name</Link>
        <Link id="navbar" to={`/norsegods`}>Norse Gods</Link>
        <Link id="navbar" to={`/media`}>Media</Link>
      </div>

      <h1 id="title-two">House of Vikings</h1>
      <h3 id="titlebelow-two">The Norse Culture</h3>
      {props.children}
    </div>
  )
}

export default Layout;

// <center><a href="https://imgbb.com/"><img src="https://image.ibb.co/fmpkak/HoVlogo.png" alt="HoVlogo" border="0" /></a></center>
