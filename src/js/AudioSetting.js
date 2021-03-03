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
    this.storage = {};
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
    const audio = event.target.id;

    if (audio == 'sounds') {
      if (muteButton.classList.contains('muted')) {
        muteButton.classList.remove('muted');
        this.sounds.map((sound) => {
          sound.muted = false;
          this.storage.muted = '';
        })
      } else {
        muteButton.classList.add('muted');
        this.sounds.map((sound) => {
          sound.muted = true;
          this.storage.muted = 'muted';
        })
      }
    } else if (audio == 'music') {
      if (muteButton.classList.contains('muted')) {
        this.music.muted = false;
        this.music.play();
        this.music.volume = this.storage.volume/100;
        this.storage.muted = '';
        muteButton.classList.remove('muted');
      } else {
        this.music.muted = true;
        this.music.pause();
        this.storage.muted = 'muted';
        muteButton.classList.add('muted');
      }
    }

    localStorage[audio] = JSON.stringify(this.storage);
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

    this.storage.volume = volume;

    localStorage[audio] = JSON.stringify(this.storage);
  }

  componentDidMount() {    
    if (localStorage.getItem('music') != null) {
      this.storage = JSON.parse(localStorage['music']);
      this.storage.muted = 'muted';
      localStorage.music = JSON.stringify(this.storage);
    }
  }

  render() {
    const {audio} = this.props;
    
    if (localStorage.getItem(`${audio.class}`) != null) {
      this.storage = JSON.parse(localStorage[audio.class]);
    }

    return(
      <div className="audio-settings__item">
        <div className="audio-settings__item--name">{`${audio.title}: `} </div>
        <input className={audio.class} type="range" min="0" max="100" name="volume" step="1" defaultValue={`${(localStorage.getItem(`${audio.class}`) != null) ? this.storage.volume : audio.volume}`} onChange={this.handleVolume} />
        <label id={audio.class} className={`audio-settings__mute ${(localStorage.getItem(`${audio.class}`) != null) ? this.storage.muted : audio.muted}`} htmlFor={audio.id} onClick={this.handleMute} title="Mute"></label>
        <input type="checkbox" name="mute-music" id={audio.id} />
      </div>

    )
  }
}

export default AudioSetting;