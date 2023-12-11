import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

const NavBar = () => (
  <NavigationMenu.Root className="w-full">
    <NavigationMenu.List className="flex w-full">
      <NavigationMenu.Item className="flex-grow">
        <NavigationMenu.Link asChild>
          <Link to="/" className="text-center block w-full">
            Home
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item className="flex-grow">
        <NavigationMenu.Link asChild>
          <Link to="/about" className="text-center block w-full">
            About
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item className="flex-grow">
        <NavigationMenu.Link asChild>
          <Link to="/contact" className="text-center block w-full">
            Contact
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);

export default NavBar;
