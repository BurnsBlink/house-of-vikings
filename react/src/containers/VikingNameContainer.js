import React, { Component } from 'react';
import ReceiveName from '../components/ReceiveName';
import names from '../constants/names'

class VikingName extends Component {
  constructor(props) {
    super(props);
    this.state ={
      norseName: 'John',
      value: 'Male'
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateNameChange = this.validateNameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // choosenSexOption(event)
  //   if (option.value === Female){
  //     firstNames = names.girlNames.join('|').toLowerCase().split('|')
  //   } else (option.value === Male) {
  //     firstNames = names.boyNames.join('|').toLowerCase().split('|')
  //   }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      norseName: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateNameChange(this.state.norseName)) {
      this.setState({ norseName: event.target.value })
    }
      this.handleClearForm(event);
  }

  validateNameChange(form) {
    if (form === '' || form === ' ') {
      this.setState({ norseName: 'Name may not be blank.' })
    }
  }

  handleNameChange(event) {
    this.validateNameChange(event.target.value)
    this.setState({ norseName: event.target.value })
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    // if (this.state.value === 'Male') {
    //   firstNames = names.boyNames.join('|').toLowerCase().split('|')
    // } else (this.state.value === 'Female') {
    //   firstNames = names.girlNames.join('|').toLowerCase().split('|')
    // }
  }

  render(){
    let boyNames = names.boyNames.join('|').toLowerCase().split('|')
    let girlNames = names.girlNames.join('|').toLowerCase().split('|')
    let lastNames = names.lastNames;
    let firstLetter = this.state.norseName[0].toLowerCase()

    let selectedBoyNames = [];
    for (let i = 0; i < boyNames.length; i++) {
      if (boyNames[i].toLowerCase().indexOf(firstLetter) != -1) {
        selectedBoyNames.push(boyNames[i]);
        }
      }
    function upperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
      }
    let firstBoyName = selectedBoyNames[Math.floor(Math.random()*selectedBoyNames.length)];
    let finalBoyFirstName = upperCase(firstBoyName);

    let randomIndex = Math.floor(Math.random() * lastNames.length);
    let finalLastName = lastNames[randomIndex];
    let choosenVikingName = finalBoyFirstName + " " + finalLastName


    return(
      <form className="new-name-form-callout" onSubmit={this.handleFormSubmit}>
        <ReceiveName
          content={this.state.norseName}
          label="Enter your first name"
          name="enter-your-first-name"
          handleFunction={this.handleNameChange}
        />

        <br/><br/>
          <center><h1 id="viking-name" >{choosenVikingName}</h1></center>
        <br/>

        <select value={this.state.value} onChange={this.handleChange} id="option">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div id="buttongroup">
          <button id="clearbutton" onClick={this.handleClearForm}>Clear</button>
          <input id="gobutton" type="submit" value="submit" />
        </div>
      </form>
    )
  }
}

export default VikingName;
