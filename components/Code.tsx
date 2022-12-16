import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {materialOceanic, materialLight, tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';

// @ts-ignore
const Code = ({value: node}: { node: any }) => {
  if (!node || !node.code) {
    return null;
  }
  const {language, code} = node;
  return (
    <div className="w-full mx-auto">
      {/* copy to clipboard here */}

      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{margin: 0, padding: "1.2rem"}}
      >
        {/* pass in code here */}
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code;