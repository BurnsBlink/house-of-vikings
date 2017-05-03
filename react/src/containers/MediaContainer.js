import React, { Component } from 'react';
import media from '../constants/media';
import MediaArea from '../components/MediaArea'


class MediaContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render() {
    let mediaInfo = media.map(info => {
      return(
        <MediaArea
        key={info.id_str}
        id={info.id_str}
        name={info.name}
        link={info.link}
        description={info.description}
        available={info.available}
        youtube={info.youtube}
        />
      )
    })
    return(
      <div>
      {mediaInfo}
      </div>
    )
  }
}

export default MediaContainer;
