import React, { useState } from "react";
import CodeBlock from "../CodeBlock";
import AddCodeBlock from "../addCode/AddCodeBlock";
import "./UserAddCode.css";

const UserAddCode = () => {
  const [codeBlocks, setCodeBlocks] = useState<string[]>([]);

  const handleAddCode = (code: string) => {
    setCodeBlocks([...codeBlocks, code]);
  };
  codeBlocks;

  return (
    <div>
      <AddCodeBlock onAdd={handleAddCode} />
    </div>
  );
};

export default UserAddCode;
