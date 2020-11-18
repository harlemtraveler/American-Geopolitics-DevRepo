import React from "react";
// import { Editor, EditorState } from 'draft-js';
import { EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div
        className={"editor"}
        style={{
          border: "1px solid black",
          minHeight: "16em",
          cursor: "text",
          maxWidth: "800",
          backgroundColor: "#f9f9f9"
        }}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
    </div>
  );
}