import generateJoke from './generateJoke';
// import {v4 as uuidv4} from 'uuid'; 
import './styles/main.scss';
import nurk1 from './assets/nurk1.svg'

const nurkImg = document.getElementById('nurkImg');
nurkImg.src = nurk1;

console.log(generateJoke());
// console.log(uuidv4());