import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    title: "Sales",
    roles: [
      {
        id: "role-1",
        title: "Sales Manager",
        location: "London UK",
        href: "#",
      },
      {
        id: "role-2",
        title: "Sales Development Representative",
        location: "Munich Germany",
        href: "#",
      },
      {
        id: "role-3",
        title: "Sales Manager",
        location: "London UK",
        href: "#",
      },
      {
        id: "role-4",
        title: "Sales Associate",
        location: "Liverpool UK",
        href: "#",
      },
      {
        id: "role-5",
        title: "Sales Representative",
        location: "New York US",
        href: "#",
      },
    ],
  },
  {
    title: "Customer Success",
    roles: [
      {
        id: "role-6",
        title: "Customer Success Associate",
        location: "London UK",
        href: "#",
      },
      {
        id: "role-7",
        title: "Customer Success Manager",
        location: "New York US",
        href: "#",
      },
      {
        id: "role-8",
        title: "Digital Marketing Specialist",
        location: "Dublin Ireland",
        href: "#",
      },
      {
        id: "role-9",
        title: "Customer Success Representative",
        location: "Dublin Ireland",
        href: "#",
      },
    ],
  },
  {
    title: "Engineering",
    roles: [
      {
        id: "role-10",
        title: "Software Engineer",
        location: "New York US",
        href: "#",
      },
      {
        id: "role-11",
        title: "Frontend Engineer",
        location: "Dublin Ireland",
        href: "#",
      },
      {
        id: "role-12",
        title: "Engineering Manager",
        location: "Chicago US",
        href: "#",
      },
      {
        id: "role-13",
        title: "Backend Engineer",
        location: "Cancun Mexico",
        href: "#",
      },
    ],
  },
];

const Career = () => {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Our Career
          </Badge>
          <h2 className="text-4xl font-bold">
            Here you can work with us
          </h2>
        </div>
        {departments.map((department) => (
          <div key={department.title} className="mt-12 md:mt-20">
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              {department.title}
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {department.roles.map((role) => (
                <li key={role.id} className="group">
                  <a href={role.href} className="flex items-center py-6">
                    <div>
                      <div className="font-medium md:text-lg">{role.title}</div>
                      <div className="text-xs text-muted-foreground md:mt-2 md:text-sm">
                        {role.location}
                      </div>
                    </div>
                    <ArrowRight className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 -z-10 rounded-full blur-3xl -bottom-10 -right-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 opacity rounded-full top-10 -left-52 -z-10"></div>
      </div>
    </section>
  );
};

export default Career;
