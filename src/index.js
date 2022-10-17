import generateJoke from './generateJoke';
// import {v4 as uuidv4} from 'uuid'; for first demo of npm import
import './styles/main.scss';
import nurk1 from './assets/nurk1.svg'

const nurkImg = document.getElementById('nurkImg');
nurkImg.src = nurk1;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke(); // inital call for first view
