import React from 'react';

const MediaArea = props => {

  return(
    <center><div className="media">
      <h2><a className='media-title' href={props.link}>{props.name}</a></h2>
      <p className='media-body'>{props.description}</p>
      <h5>Available on {props.available}</h5>
      <iframe className="youtube" width="560" height="315" src={props.youtube} frameBorder="0" allowFullScreen></iframe>
    </div></center>
  )
}

export default MediaArea;
