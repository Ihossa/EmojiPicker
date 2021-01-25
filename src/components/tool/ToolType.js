import React from "react";
import { useState, useEffect } from 'react';


function ToolType() {
    const emojies = require('emojis-list')
    const emojiesText = require('emojis-keywords');
    const [emoji, emojiArr] = useState([]);

      useEffect(() => {
        for(let i = 1749; i < 1800; i++){
            let emojiObj = {
                emojies: emojies[i],
                emojiesText: emojiesText[i]
            }
            emojiArr(emoji.push(emojiObj))
            console.log(emoji)
            // emojiArr(emoji.push(emojiObj))
        }
      });
    
  return (
    <div className = "tool-bar">
        <h1 className = "tool-bar_header">Smileys & People</h1>
        <div className = "tool-bar_emoji">

        </div>
        <input type = "text" />
    </div>
  );
}

export default ToolType;