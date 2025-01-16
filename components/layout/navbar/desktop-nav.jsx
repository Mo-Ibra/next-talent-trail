import { Button } from "@/components/ui/button";
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
import Image from "next/image";

const DesktopNav = () => {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-6">
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="https://shadcnblocks.com/images/block/block-1.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <p className="text-xl font-bold cursor-pointer">
            Talent{" "}
            <span className="text-orange-500 font-bold uppercase">Trail</span>
          </p>
        </Link>
        <div className="flex items-center">
          <Link
            className={cn(
              "text-muted-foreground py-2 px-4 hover:text-orange-500",
              navigationMenuTriggerStyle
            )}
            href="/"
          >
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-80 p-3">
                    {subMenuItemsTwo.map((item, idx) => (
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
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            className={cn(
              "text-muted-foreground py-2 px-4 hover:text-orange-500",
              navigationMenuTriggerStyle
            )}
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href="/auth/login">
          <Button variant="outline">Log in</Button>
        </Link>
        <Link href="/auth/sign-up">
          <Button className="bg-orange-600 hover:bg-orange-700">Sign up</Button>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;
