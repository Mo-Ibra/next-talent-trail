import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UIIntro = () => {
  return (
    <div id="ui_introduction">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        UI Elements: ShadCN UI 🎨
      </h2>
      <p className="text-lg text-gray-600">
        Talent Trail leverages the power of ShadCN UI, a library built with{" "}
        <strong>Radix UI primitives</strong> and <strong>Tailwind CSS</strong>.
        With its modular and accessible components, you can easily customize and
        build scalable applications.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
        How to Install:
      </h3>
      <SyntaxHighlighter language="bash" style={oneDark} className="bg-gray-100 p-4 rounded-md">
        npm install shadcn-ui
      </SyntaxHighlighter>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
        And After that you can install any component you want from ShadCN UI
      </h3>
      <SyntaxHighlighter language="bash" style={oneDark} className="bg-gray-100 p-4 rounded-md">
        npx shadcn@latest add card
      </SyntaxHighlighter>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
        Example: Card
      </h3>
      <SyntaxHighlighter language="javascript" style={oneDark} className="bg-gray-100 p-4 rounded-md">
        {`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        This is a customizable card using ShadCN.
      </CardContent>
    </Card>
  );
}`}
      </SyntaxHighlighter>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
        Here we go.
      </h3>

      <Card>
        <CardHeader>
          <CardTitle>Example Card</CardTitle>
        </CardHeader>
        <CardContent>This is a customizable card using ShadCN UI.</CardContent>
      </Card>
    </div>
  );
};

export default UIIntro;
