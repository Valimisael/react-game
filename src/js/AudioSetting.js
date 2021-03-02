import React from 'react';
import {flipFront, flipBack, flipAll, correct, music, win} from './Audio';

class AudioSetting extends React.Component {
  constructor(props) {
    super(props);    

    this.handleClick = this.handleClick.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleVolume = this.handleVolume.bind(this);

    this.music = music;
    this.sounds = [flipFront, flipBack, correct, flipAll, win];
  }

  handleClick = (event) => {
    const muteButton = event.target;

    if (muteButton.classList.contains('muted')) {
      muteButton.classList.remove('muted');
    } else {
      muteButton.classList.add('muted');
    }
  }

  handleMute = (event) => {
    const muteButton = event.target;
    const audio = event.target.classList;

    if (audio == 'music') {
      if (muteButton.checked) {
        this.music.muted = true;
        this.music.pause();
      } else {
        this.music.muted = false;
        this.music.play();
      }
    } else if (audio == 'sounds') {
      this.sounds.map((sound) => {
        if (muteButton.checked) {
          sound.muted = true;
        } else {
          sound.muted = false;
        }
      })
    }
  }

  handleVolume = (event) => {
    const volume = event.target.value;
    const audio = event.target.classList;

    if (audio == 'music') {
      this.music.volume = volume/100;
    } else if (audio == 'sounds') {
      this.sounds.map((sound) => {
        sound.volume = volume/100;
      })
    }
  }

  render() {
    const {audio} = this.props;

    return(
      <div className="audio-settings__item">
        <div className="audio-settings__item--name">{`${audio.title}: `} </div>
        <input className={audio.class} type="range" min="0" max="100" name="volume" step="1" defaultValue={audio.volume} onChange={this.handleVolume} />
        <label className={`audio-settings__mute ${audio.muted}`} htmlFor={audio.id} onClick={this.handleClick}></label>
        <input className={audio.class} type="checkbox" name="mute-music" id={audio.id} defaultChecked={audio.checked} onChange={this.handleMute} />
      </div>

    )
  }
}

export default AudioSetting;