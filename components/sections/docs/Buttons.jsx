import { Button } from "@/components/ui/button";

const ButtonsSection = () => {
  return (
    <div id="buttons">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        🔘 Buttons
      </h2>
      <div className="space-y-4">
        <p className="text-gray-600">
          You can easily create your button with Tailwind CSS classes.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
          <code>
            {`<div className="flex flex-wrap gap-4">
  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
    Primary
  </button>
  <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
    Secondary
  </button>
  <button className="px-4 py-2 bg-red-500 text-white rounded-md">
    Danger
  </button>
  <button
    className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
    disabled
  >
    Disabled
  </button>
  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
    Success
  </button>
</div>`}
          </code>
        </pre>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Primary
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
            Secondary
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Danger
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
            disabled
          >
            Disabled
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">
            Success
          </button>
        </div>
        <p className="text-gray-600">You can use shadcn ready button as well</p>

        <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
          <code>
            {`<Button className="m-2" variant="default">default</Button>
<Button variant="destructive">destructive</Button>
<Button variant="outline">outline</Button>
<Button variant="secondary">secondary</Button>
<Button variant="ghost">ghost</Button>
<Button variant="link">link</Button>`}
          </code>
        </pre>

        <Button className="m-2" variant="default">
          default
        </Button>
        <Button className="m-2" variant="destructive">
          destructive
        </Button>
        <Button className="m-2" variant="outline">
          outline
        </Button>
        <Button className="m-2" variant="secondary">
          secondary
        </Button>
        <Button className="m-2" variant="ghost">
          ghost
        </Button>
        <Button className="m-2" variant="link">
          link
        </Button>
      </div>
    </div>
  );
};

export default ButtonsSection;