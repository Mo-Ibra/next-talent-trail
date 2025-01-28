const TechStackSection = () => {
  return (
    <div id="tech-stack">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        🛠️ Tech Stack
      </h2>
      <ul className="ml-6 list-disc text-gray-600 space-y-2">
        <li>
          <strong>Frontend Framework:</strong> Next.js 15 (React).
        </li>
        <li>
          <strong>Design:</strong> Tailwind CSS.
        </li>
        <li>
          <strong>UI Components:</strong> ShadCN UI.
        </li>
        <li>
          <strong>Animations:</strong> Framer Motion.
        </li>
        <li>
          <strong>Icons:</strong> lucide-react, react-icons.
        </li>
      </ul>
    </div>
  );
};

export default TechStackSection;