import React, { FC, useEffect, useState, useRef } from "react";
import { useLocalStorage } from "react-use";

const Editor: FC = () => {
  const [value, setValue] = useLocalStorage("editor-content", "");
  const [content, setContent] = useState(value);
  const editorContainer = useRef(null);

  useEffect(() => {
    editorContainer.current.focus();
    editorContainer.current.innerText = content;
  }, []);

  return (
    <>
      <div
        ref={editorContainer}
        id="editor"
        contentEditable="true"
        tabIndex={1}
        className="editor"
        onKeyUpCapture={(e) => {
          setValue(e.currentTarget.innerText);
        }}
      ></div>
      <style jsx>{`
        .editor {
          font-size: 1.2rem;
          background: #543864;
          color: #fff;
          min-height: 30rem;
          width: 100%;
          padding: 2rem;
          outline: none;
          margin: 1rem 0;
          line-height: 2rem;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  );
};

export default Editor;
