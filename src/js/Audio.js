import FlipFront from '../audio/flip-front.mp3';
import FlipBack from '../audio/flip-back.mp3';
import FlipAll from '../audio/flip-all.mp3';
import Music from '../audio/music.mp3';

const flipFront = new Audio(FlipFront);
const flipBack = new Audio(FlipBack);
const flipAll = new Audio(FlipAll);
const music = new Audio(Music);

export {flipFront, flipBack, flipAll, music};