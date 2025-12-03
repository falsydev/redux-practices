import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeSnippet({ mb = "mb-4", children, className }) {
  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className={`${mb} rounded ${className}`}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
