import React, { useState } from "react";
import CodeBlock from "../CodeBlock";

interface AddCodeBlockProps {
  onAdd: (code: string) => void;
}

function AddCodeBlock(props: AddCodeBlockProps) {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);

  const handleAddClick = () => {
    props.onAdd(code);
    setShowCode(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
    setShowCode(false);
  };

  return (
    <div>
      <input type="text" value={code} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
      {showCode && (
        <div>
          {/* <CodeBlock code={code} /> */}
        </div>
      )}
    </div>
  );
}

export default AddCodeBlock;

