import React from 'react';
import data from '../constants/data';
import Raid from '../components/Raid';
import { Link } from 'react-router';

class RaidContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedRaidId: null
    }
    this.handleSelectedRaid = this.handleSelectedRaid.bind(this);
  }

  handleSelectedRaid(id){
    if (this.state.selectedRaidId === id) {
      this.setState({ selectedRaidId: null })
    } else {
      this.setState({ selectedRaidId: id })
    }
  }


  render() {
    let className;
    let raids = data.map(raid => {
      if (raid.id_str === this.state.selectedRaidId) {
        className = 'data-shown';
      } else {
        className = 'data-hidden';
      }

      let onClick = () => {
        this.handleSelectedRaid(raid.id_str)
      }

      return(
        <Raid
        key={raid.id_str}
        id={raid.id_str}
        location={raid.location}
        date={raid.date}
        description={raid.description}
        source={raid.source}
        className={className}
        onClick={onClick}
        />
      )
    })
    return(
      <div>
      {raids}
      </div>
    )
  }
}

export default RaidContainer;
