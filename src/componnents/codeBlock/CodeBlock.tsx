import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/vs2015.css";
import "./CodeBlock.css";
import { ContentTypes } from "../../Types/enum/contentCube";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);

interface CodeBlockProps {
  body: string;
  type: string;
  code: string;
  codeType?: string;
  description?: string;
  title: string;
  isModalOpen: string;
  setIsModalOpen: any;
}

function CodeBlock(props: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && props.codeType) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [props.codeType]);


  const [downloadButtonText, setDownloadButtonText] = useState("Download Code 📄");
  
  const handleDownloadClick = () => {
    const blob = new Blob([props.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.txt";
    a.click();
    URL.revokeObjectURL(url);
    setDownloadButtonText("Downloaded! 🡣");
    setTimeout(() => {
      setDownloadButtonText("Download Code 📄");
    }, 2000);
 
  };


  const [copyButtonText, setCopyButtonText] = useState("Copy Code 📷");
  
  const handleCopyClick = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      setCopyButtonText("Copied! ✔");
      setTimeout(() => {
        setCopyButtonText("Copy Code 📷");
      }, 2000);
    }
  };
  


  

  return (
    <div className="modal-overlay">
      <div className="close-modal-box">
        <button
          className="close-modal"
          onClick={() => {
            props.setIsModalOpen("");
          }}
        >
          <img
            className="close-modal-img-code-box"
            src="./icons/CloseModal.svg"
            alt="close codal icon"
          />
        </button>
        <div className="code-block-container">
          <div className="code-block-titel">{props.title}</div>
          <div className="description-container">
            <span>Description</span>
            <div className="description-box">{props.description}</div>
          </div>

          {props.isModalOpen === "code" ? (
            <>
              <div className="code-block-header">
                <div className="code-block-codeType-titel">
                  {props.codeType}
                </div>
                <button onClick={handleDownloadClick}>{downloadButtonText}</button>
                <button onClick={handleCopyClick}>{copyButtonText}</button>
              </div>
              <code className={props.codeType} ref={codeRef}>
                {props.code}
              </code>
            </>
          ) :  (
            <>
              <div className="description-container">
                <span>Text</span>
                <div className="description-box">{props.body}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeBlock;
