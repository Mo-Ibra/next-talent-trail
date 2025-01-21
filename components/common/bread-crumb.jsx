"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

function Breadcrumb({
  items,
  background,
}) {
  return (
    <div className="pt-56 pb-40 relative w-full h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden">

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-orange-500/30" />
      </div>

      {/* Breadcrumb Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {items[items.length - 1].title}
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <Home className="h-4 w-4 text-orange-600 hover:text-orange-700" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-white/60" />
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors",
                    index === items.length - 1
                      ? "text-white font-medium pointer-events-none"
                      : "text-white/80 hover:text-orange-700"
                  )}
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;