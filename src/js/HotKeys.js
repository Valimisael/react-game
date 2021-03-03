import {flipFront, flipBack, flipAll, correct, music, win} from './Audio';

const audio = [flipFront, flipBack, flipAll, correct, music, win];

const hotKeysList = [
  {
    key: 'Esc',
    role: 'Close Pop Ups',
  },
  {
    key: 'Shift + M',
    role: 'Mute all music',
  },
  {
    key: 'Shift + S',
    role: 'Switch between Day & Night modes',
  },
  {
    key: 'Shift + R',
    role: 'Restart game',
  },
  {
    key: 'Shift + A',
    role: 'Games results',
  },
  {
    key: 'Shift + C',
    role: 'Choose card’s cover',
  }
]

const modeHotKey = (event) => {
  const modeSwitcher = document.getElementById('switch');

  if (event.shiftKey && event.keyCode === 83) {
    if (modeSwitcher.checked) {
      modeSwitcher.checked = false;
      document.getElementById('app').classList.remove('night-mode');      
      if (localStorage.getItem('mode') != null) {
        localStorage.setItem('mode', '');
      }
    } else {
      modeSwitcher.checked = true;
      document.getElementById('app').classList.add('night-mode');
      localStorage.setItem('mode', 'night-mode');  
    }
  }
}

const closePopUpHotKey = (event) => {
  const popUp = document.getElementById('popup');

  if (event.keyCode === 27) {
    if (popUp.classList.contains('open')) {
      popUp.classList.remove('open');
      document.querySelector('body').classList.remove('not-scrollable');
    }
  }
}

const muteAllHotKey = (event) => {
  if (event.shiftKey && event.keyCode === 77) {
    const sounds = JSON.parse(localStorage.sounds);
    const music = JSON.parse(localStorage.music);
    
    sounds.muted = 'muted';
    music.muted = 'muted';

    localStorage.sounds = JSON.stringify(sounds);
    localStorage.music = JSON.stringify(music);

    audio.map((audio) => {
      audio.muted = true;
    })

    document.getElementById('sounds').classList.add('muted');
    document.getElementById('music').classList.add('muted');
  }
}

const initHotKeys = (event) => {
  modeHotKey(event);
  closePopUpHotKey(event);
  muteAllHotKey(event);
}

export {initHotKeys, hotKeysList};