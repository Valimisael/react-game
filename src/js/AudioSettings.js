import React from 'react';
import AudioSetting from './AudioSetting';

class AudioSettings extends React.Component {
  constructor(props) {
    super(props);

    this.audio = [
      {
        title: 'Music',
        class: 'music',
        id: 'mute-music',
        checked: true,
        muted: 'muted',
        volume: 20,
      },
      {
        title: 'Sounds',
        class: 'sounds',
        id: 'mute-sounds',
        checked: false,
        muted: '',
        volume: 100,
      },
    ]
  }

  render() {
    const audio = this.audio;

    return (
      <div className="audio-settings">
        {
          audio.map((audio, index) => {
            const storage = {
              volume: audio.volume,
              muted: audio.muted,
            }
    
            if (localStorage.getItem(`${audio.class}`) == null) {
              localStorage[audio.class] = JSON.stringify(storage);
            }

            return (
              <div key={index}>
                <AudioSetting audio={audio} handleClick={this.handleClick} handleMute={this.handleMute} handleVolume={this.handleVolume} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default AudioSettings;