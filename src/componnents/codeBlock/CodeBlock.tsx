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
  language?: string;
}

function CodeBlock(props: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(
    props.language || ""
  );

  useEffect(() => {
    if (codeRef.current && selectedLanguage) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [selectedLanguage]);

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


  const handleLanguageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedLanguage(value);
  };

  const renderCodeBlock = () => {
    return (
      <code className={selectedLanguage} ref={codeRef}>
        {props.code}
      </code>
    );
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <select
          value={selectedLanguage}
          onChange={handleLanguageSelect}
          className="language-select"
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="typescript">TypeScript</option>
          <option value="css">Css</option>
          <option value="json">Json</option>
        </select>
          <button onClick={handleDownloadClick}>Download Code</button>
        <button onClick={handleCopyClick}>Copy Code</button>
      </div>
      <div className="code-block-box">{renderCodeBlock()}</div>
    </div>
  );
}

export default CodeBlock;
