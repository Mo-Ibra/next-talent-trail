const InstallationSection = () => {
  return (
    <div id="installation">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        🔧 Installation
      </h2>
      <ol className="ml-6 list-decimal text-gray-600 space-y-2">
        <li>
          Clone the repository:
          <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mt-2">
            <code>git clone https://github.com/your-repo/talent-trail.git</code>
          </pre>
        </li>
        <li>
          Install dependencies:
          <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mt-2">
            <code>npm install</code>
          </pre>
        </li>
        <li>
          Run the development server:
          <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mt-2">
            <code>npm run dev</code>
          </pre>
        </li>
      </ol>
    </div>
  );
};
export default InstallationSection;
