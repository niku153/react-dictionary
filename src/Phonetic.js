import React from "react";
import logo from "./logo.png";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);
  function handleClick(event) {
    audio.play();
  }
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div>
        <img src={logo} alt="audio" onClick={handleClick} />
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
