import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  const icon = <FontAwesomeIcon icon={faVolumeHigh} />;
  let audio = new Audio(props.phonetic.audio);
  function handleClick(event) {
    audio.play();
  }
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <span onClick={handleClick} className="icon">
          {icon}
        </span>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
