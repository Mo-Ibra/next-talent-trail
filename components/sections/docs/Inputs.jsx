import { Input } from "@/components/ui/input";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InputsSection = () => {
  return (
    <div id="inputs">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        📝 Inputs
      </h2>
      <div className="space-y-4">
        <p className="text-gray-600">
          You can easily create and customize your input with Tailwind CSS
          classes.
        </p>

        {/* Tailwind Input Code Example */}
        <SyntaxHighlighter language="html" style={oneDark} className="bg-gray-100 p-4 rounded-md">
          {`<input type="text" className="border border-gray-300 p-2 rounded-md" placeholder="Enter your name" />`}
        </SyntaxHighlighter>

        {/* Render input */}
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter your name"
        />
        
        <p className="text-gray-600">You can use shadcn ready input as well</p>

        {/* ShadCN UI Input Code Example */}
        <SyntaxHighlighter language="html" style={oneDark} className="bg-gray-100 p-4 rounded-md">
          {`<Input placeholder="Enter your name" />`}
        </SyntaxHighlighter>

        {/* Render ShadCN input */}
        <Input placeholder="Enter your name" />
      </div>
    </div>
  );
};

export default InputsSection;