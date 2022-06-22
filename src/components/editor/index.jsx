import React from "react";
import Header from "../header";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeText } from "../../app/redux/textSlice/textSlice";

function Editor() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.markdown.text);

  return (
    <div className="editor">
      <Header>Editor Markdown</Header>
      <textarea
        name="editor"
        id="editor"
        cols="100"
        rows="10"
        onChange={(e) => dispatch(changeText(e.target.value))}
        value={text}
      ></textarea>
    </div>
  );
}

export default Editor;
