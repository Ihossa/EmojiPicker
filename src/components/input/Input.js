import React from 'react';
import { useState } from 'react';
import './Input.scss';
import emoji from './../../assets/smile.png';
import ToolType from '../tool/ToolType'


function Input() {
  const emojies = require('emojis-list')
  const emojiesText = require('emojis-keywords');
  const [isShowing, setIsShowing] = useState(false);
  const [valueInput, setValueInput] = useState("")
  function toggle() {
    setIsShowing(!isShowing);
  }
  function setEmoji(emoji) {
    setValueInput(valueInput + emoji);
  }
  function inputChangedHandler(event) {
    let idEmoji = emojiesText.indexOf(event.target.value);
    if(idEmoji != -1){
      setValueInput(emojies[idEmoji]);
    }else{
      setValueInput(event.target.value);
    }
    
  }

  return (
    <div className="input">
      { isShowing && <ToolType setValueInput = {setEmoji} /> }
      <div className="input_block">
        <input
          className="input_text"
          type = "text" 
          placeholder="Message #general"
          onChange = {(event) => inputChangedHandler(event)}
          value = {valueInput}
        />
        <img
          className="input_emoji"
          src = {emoji}
          alt = "smile"
          onClick = {toggle}
        />
      </div>
    </div>
  );
}

export default Input;
