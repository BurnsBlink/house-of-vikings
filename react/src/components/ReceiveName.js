import React from 'react';
import { Link } from 'react-router';

const ReceiveName = props => {
  return (
      <input className="form" placeholder={`Your first name`}
        name={props.name}
        onChange={props.handleFunction}
        type='text'
        value={props.content}
      />
  );
}

export default ReceiveName;
