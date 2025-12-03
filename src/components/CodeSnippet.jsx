import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeSnippet({ children, className }) {
  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className={`rounded mb-4 ${className}`}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
