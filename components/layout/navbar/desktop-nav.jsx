import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { subMenuItemsOne, subMenuItemsTwo } from "./subMenu";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src="https://shadcnblocks.com/images/block/block-1.svg"
            className="w-8"
            alt="logo"
          />
          <span className="text-xl font-bold">Shadcn Blocks</span>
        </div>
        <div className="flex items-center">
          <a
            className={cn(
              "text-muted-foreground",
              navigationMenuTriggerStyle,
              buttonVariants({
                variant: "ghost",
              })
            )}
            href="#"
          >
            Home
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>
                  <span>Products</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-80 p-3">
                    {subMenuItemsOne.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          className={cn(
                            "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                          href={item.href}
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-80 p-3">
                    {subMenuItemsTwo.map((item, idx) => (
                      <li key={idx}>
                        <a
                          className={cn(
                            "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                          href="#"
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            className={cn(
              "text-muted-foreground",
              navigationMenuTriggerStyle,
              buttonVariants({
                variant: "ghost",
              })
            )}
            href="#"
          >
            Pricing
          </a>
          <a
            className={cn(
              "text-muted-foreground",
              navigationMenuTriggerStyle,
              buttonVariants({
                variant: "ghost",
              })
            )}
            href="#"
          >
            Blog
          </a>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Log in</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
};


export default DesktopNav;