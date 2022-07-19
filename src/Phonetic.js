import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const icon = <FontAwesomeIcon icon={faVolumeHigh} />;
  let audio = new Audio(props.phonetic.audio);
  function handleClick(event) {
    audio.play();
  }
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div>
        <span onClick={handleClick}>{icon}</span>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
