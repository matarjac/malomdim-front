import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/vs2015.css";
import "./CodeBlock.css";



hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);


interface CodeBlockProps {
  code: string;
  codeType?: string;
  description?: string;
  isCodeOpen: boolean;
  setIsCodeOpen: (isOpen: boolean) => void;
}

function CodeBlock(props: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && props.codeType) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [props.codeType]);

  const handleCopyClick = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
    }
  };

  const handleDownloadClick = () => {
    const blob = new Blob([props.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.txt";
    a.click();
    URL.revokeObjectURL(url);
  };
console.log(props.description);

  return (
    <div className="modal-overlay">
      <div className="close-modal-box">
        <button className="close-modal" onClick={() => props.setIsCodeOpen(false)}>
          <img
            className="close-modal-img-code-box"
            src="./icons/CloseModal.svg"
            alt="close codal icon"
          />
        </button>
        <div className="code-block-container">
          <div>
          {props.description}
          </div>
          <div className="code-block-header">
            <div className="code-block-titel">{props.codeType}</div>
            <button onClick={handleDownloadClick}>Download Code</button>
            <button onClick={handleCopyClick}>Copy Code</button>
          </div>
          <code className={props.codeType} ref={codeRef}>
            {props.code}
          </code>
        </div>
      </div>
    </div>
  );
}

export default CodeBlock;