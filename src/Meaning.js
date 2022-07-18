import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              <strong>Definition:</strong> {definition.definition} <br />
              <strong>Example:</strong> <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
              <hr />
            </span>
          </div>
        );
      })}
    </div>
  );
}
