import React from "react";
import Header from "../header";
import { useSelector } from "react-redux/es/exports";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Preview = () => {
  const text = useSelector((state) => state.markdown.text);

  return (
    <div className="preview">
      <Header>Preview Markdown</Header>
      <div id="preview">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
