import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallationSection = () => {
  return (
    <div id="installation">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        🔧 Installation
      </h2>
      <ol className="ml-6 list-decimal text-gray-600 space-y-2">
        <li>
          Clone the repository:
          <SyntaxHighlighter language="bash" style={oneDark} className="bg-gray-100 p-4 rounded-md mt-2">
            git clone https://github.com/your-repo/talent-trail.git
          </SyntaxHighlighter>
        </li>
        <li>
          Install dependencies:
          <SyntaxHighlighter language="bash" style={oneDark} className="bg-gray-100 p-4 rounded-md mt-2">
            npm install
          </SyntaxHighlighter>
        </li>
        <li>
          Run the development server:
          <SyntaxHighlighter language="bash" style={oneDark} className="bg-gray-100 p-4 rounded-md mt-2">
            npm run dev
          </SyntaxHighlighter>
        </li>
      </ol>
    </div>
  );
};

export default InstallationSection;