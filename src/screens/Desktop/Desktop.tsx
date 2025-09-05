import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Products", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Company", href: "#" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#0d0657] min-h-screen w-full">
      <header className="w-full">
        <nav className="flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-8">
            <div className="text-white font-semibold text-lg">Logo</div>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#0d0657] transition-colors duration-200 h-auto px-6 py-2"
          >
            Contact
          </Button>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        <div className="h-[calc(100vh-183px)] w-full"></div>
      </main>
    </div>
  );
};
