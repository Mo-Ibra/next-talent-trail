import Link from "next/link";
import { navigation } from "./docs-navigation";

const DocsSidebar = () => {
  return (
    <div className="hidden lg:block sticky top-20 self-start w-64 shrink-0 border-l">
      <div className="pl-6">
        {navigation.map((group) => (
          <div key={group.title} className="pb-8">
            <h4 className="mb-1 rounded-md px-2 py-1 text-orange-500 font-bold text-2xl">
              {group.title}
            </h4>
            {group.items?.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-1 text-sm hover:bg-accent"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsSidebar;