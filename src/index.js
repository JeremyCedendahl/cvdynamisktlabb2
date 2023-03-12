import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


document.addEventListener("keydown", keyDownEasterEgg, false);
var key = '';
function keyDownEasterEgg(e){
  key += e.keyCode;
  if(key === "49515155"){
    alert("You wrote 1337. Elite!!");
    key = '';
  }
  processChange();
}

function debounce(func, timeout = 1000){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function clearInput(){
  key = '';
}
const processChange = debounce(() => clearInput());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


