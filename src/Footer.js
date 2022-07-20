import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/niku153/react-dictionary"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        open source code{" "}
      </a>
      by{" "}
      <a
        href="https://vermillion-froyo-c5f38e.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        nirali parikh
      </a>
      , hosted on{" "}
      <a
        href="https://whimsical-mandazi-f37bdb.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        netlify
      </a>
    </footer>
  );
}
