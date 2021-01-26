import React from "react";
import './ToolType.scss'
import { useState, useEffect } from 'react';


function ToolType({setValueInput}) {
    const emojies = require('emojis-list')
    const emojiesText = require('emojis-keywords');
    const [emojiArr, setEmoji] = useState([]);
    const [emojiHover, setEmojiHover] = useState("");

    useEffect(() => {
      let arrEmoji = [];
      for(let i = 1749; i < 1800; i++){
        let emojiObj = {
          id: i,
          emojies: emojies[i],
          emojiesText: emojiesText[i]
        };
        arrEmoji.push(emojiObj)
      };
      setEmoji(arrEmoji)
      console.log(emojiArr)
    },[]);

    function onMouseEnterHandler(el) {
      setEmojiHover(el.target.id)
    };
    function onMouseLeaveHandler() {
      setEmojiHover("")
    };

  return (
    <div className = "wrap">
      <div className = "tool-bar">
          <h1 className = "tool-bar_header">Smileys & People</h1>
          <div className = "tool-bar_emoji">
            {emojiArr.map((emoji, index) => {
              return ( <div 
                key = {index}
                id = {emoji.id}
                className = "tool-bar_emoji_smile"
                onMouseEnter = {onMouseEnterHandler}
                onMouseLeave = {onMouseLeaveHandler}
                onClick = {() => setValueInput(emojies[emojiHover])}
                >
                  {emoji.emojies}
                </div>
                )
            })}
          </div>
          <input className = "tool-bar_input" value = {emojiHover !== "" ? `${emojies[emojiHover]} ${emojiesText[emojiHover]}` : ""} readOnly />
      </div>
    </div>
  );
}

export default ToolType;