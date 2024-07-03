import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "../app/constants";

const LanguageSelector = ({ language, onSelect }) => {
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (lang) => {
    onSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <p className="language-label" style={{ fontSize: "24px" }}>
        Language:
      </p>
      <button
        className={`language-button ${language === language ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "10px",
          width: "10em",
          color: "black",
        }}
      >
        {language}
      </button>
      {isOpen && (
        <ul
          className="language-list"
          style={{ backgroundColor: "#110c1b", color: "#ffff" }}
        >
          {languages.map(([lang, version]) => (
            <li
              key={lang}
              className={`language-item ${language === lang ? "active" : ""}`}
              onClick={() => handleClick(lang)}
            >
              {lang}
              <span
                className="version-info"
                style={{ color: "gray", fontSize: "12px", padding: "5px" }}
              >
                ({version})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
