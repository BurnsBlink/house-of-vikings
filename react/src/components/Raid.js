import React from 'react';

const Raid = (props) => {

  return(
    <div className='place-data-combo'>
      <div onClick={props.onClick}>
        <i aria-hidden='true'></i>
        <h3 className="open-link">{props.location}</h3>
      </div>

      <div id={props.location}  className={props.className}>
        <center><h4>Year: {props.date}</h4></center>
        <center><p className='location-body' >{props.description}</p></center>
        <a className='sublink' href={props.source}>Source</a>
      </div>
    </div>
  )
}

export default Raid;
