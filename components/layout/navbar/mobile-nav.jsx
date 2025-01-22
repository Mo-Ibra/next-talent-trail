import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  subMenuItemsUtils,
  subMenuItemsJob,
  subMenuItemsPages,
  subMenuItemsHome,
} from "./subMenu";

const MobileNav = () => {
  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" className="w-8" alt="logo" />
          <p className="text-xl font-bold cursor-pointer">
            Lent{" "}
            <span className="text-orange-500 font-bold uppercase">Trail</span>
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center">
                  <img
                    src="/logo.svg"
                    className="w-8"
                    alt="logo"
                  />
                  <p className="text-xl font-bold cursor-pointer">
                    lent{" "}
                    <span className="text-orange-500 font-bold uppercase">
                      Trail
                    </span>
                  </p>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="mb-8 mt-8 flex flex-col gap-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="home" className="border-b-0">
                  <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                    Home
                  </AccordionTrigger>
                  <AccordionContent className="mt-2">
                    {subMenuItemsHome.map((item, idx) => (
                      <Link
                        key={idx}
                        className={cn(
                          "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={item.href}
                      >
                        {item.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="jobs" className="border-b-0">
                  <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                    Jobs
                  </AccordionTrigger>
                  <AccordionContent className="mt-2">
                    {subMenuItemsJob.map((item, idx) => (
                      <Link
                        key={idx}
                        className={cn(
                          "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={item.href}
                      >
                        {item.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pages" className="border-b-0">
                  <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                    Pages
                  </AccordionTrigger>
                  <AccordionContent className="mt-2">
                    {subMenuItemsPages.map((item, idx) => (
                      <Link
                        key={idx}
                        className={cn(
                          "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={item.href}
                      >
                        {item.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="utils" className="border-b-0">
                  <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                    Utils
                  </AccordionTrigger>
                  <AccordionContent className="mt-2">
                    {subMenuItemsUtils.map((item, idx) => (
                      <Link
                        key={idx}
                        className={cn(
                          "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={item.href}
                      >
                        {item.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href="/contact-us"
                className="font-semibold hover:text-orange-500"
              >
                Contact
              </Link>
              <Link
                href="/documentation"
                className="font-semibold hover:text-orange-500"
              >
                Documentation
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
