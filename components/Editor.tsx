import React, { FC, useEffect, useState, useRef } from "react";
import { useLocalStorage } from "react-use";

const Editor: FC = () => {
  const [value, setValue] = useLocalStorage("editor-content", "");
  const [content, setContent] = useState(value);
  const editorContainer = useRef(null);

  useEffect(() => {
    editorContainer.current.focus();
    let finalContent = content;
    console.log(content, content.match(/-\[]/g));
    finalContent = finalContent.replace(
      /-\[]/g,
      '<input type="checkbox" class="editor-checkbox">'
    );

    editorContainer.current.innerHTML = finalContent;
  }, []);

  return (
    <>
      <div
        ref={editorContainer}
        id="editor"
        contentEditable="true"
        tabIndex={1}
        className="editor"
        onClick={(e) => {
          const isCheckbox = (e.target as HTMLInputElement).type === "checkbox";
          if (isCheckbox) {
            const el = e.target as HTMLInputElement;
            if (el.checked) {
              el.setAttribute("checked", "checked");
              let text = e.currentTarget.innerHTML;
              setValue(text);
            }
          }
        }}
        onKeyUpCapture={(e) => {
          let text = e.currentTarget.innerHTML;
          setValue(text);
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
          border: 1px solid rgba(229, 229, 229, 0.3);
        }
      `}</style>
    </>
  );
};

export default Editor;
