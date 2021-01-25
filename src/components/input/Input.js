import React from 'react';
import { useState } from 'react';
import './Input.scss';
import emoji from './../../assets/smile.png';
import ToolType from '../tool/ToolType'


function Input() {

  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }

  return (
    <div className="input">
      { isShowing && <ToolType /> }
      <div className="input_block">
        <input className="input_text" type = "text"></input> 
        <img  className="input_emoji" src = {emoji} alt = "smile" onClick = {toggle} />
      </div>
    </div>
  );
}

export default Input;
