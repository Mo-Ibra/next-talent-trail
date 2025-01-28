import Link from "next/link";
import { ArrowRight, Brain, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Categories2({ categories }) {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Browse by Categories</h2>
            <p className="text-muted-foreground">
              Search your career opportunity with our categories
            </p>
          </div>
          <Link
            href="/job-categories"
            className="text-orange-500 hover:text-orange-600 transition-colors"
          >
            All Categories →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group hover:shadow-md transition-shadow relative"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.courses}
                </p>
                <Link
                  href="/job-list/one"
                  className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  Explore Jobs
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                {category.designedIcon}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Brain className="absolute w-40 h-40 text-orange-500/5 bottom-10 left-5 -z-10" />
      </div>
    </section>
  );
}

export default Categories2;
