import { Input } from "@/components/ui/input";

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
        <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
          <code>
            {`<input type="text" className="border border-gray-300 p-2 rounded-md" placeholder="Enter your name" />`}
          </code>
        </pre>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter your name"
        />
        <p className="text-gray-600">You can use shadcn ready input as well</p>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
          <code>{`<Input placeholder="Enter your name" />`}</code>
        </pre>
        <Input placeholder="Enter your name" />
      </div>
    </div>
  );
};

export default InputsSection;
