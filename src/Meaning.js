import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              {definition.definition} <br />
              <em>{definition.example}</em>
              <br />
              <hr />
            </span>
          </div>
        );
      })}
    </div>
  );
}
