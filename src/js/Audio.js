import FlipFront from '../audio/flip-front.mp3';
import FlipBack from '../audio/flip-back.mp3';
import FlipAll from '../audio/flip-all.mp3';
import Correct from '../audio/correct.mp3';
import Music from '../audio/music.mp3';
import Win from '../audio/win.mp3';

const flipFront = new Audio(FlipFront);
const flipBack = new Audio(FlipBack);
const flipAll = new Audio(FlipAll);
const correct = new Audio(Correct);
const music = new Audio(Music);
const win = new Audio(Win);

export {flipFront, flipBack, flipAll, correct, music, win};