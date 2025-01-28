import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
        <code>npm install shadcn-ui</code>
      </pre>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
        And After that you can install any component you want from ShadCN UI
      </h3>
      <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
        <code>npx shadcn@latest add card</code>
      </pre>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
        Example: Card
      </h3>
      <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
        <code>
          {`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Example() {
  return (
  <Card>
    <CardHeader>
      <CardTitle>Example Card</CardTitle>
    </CardHeader>
    <CardContent>
      This is a customizable card using ShadCN UI.
    </CardContent>
  </Card>
  );
}`}
        </code>
      </pre>

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
