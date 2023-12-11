import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { CaretDownIcon } from "@radix-ui/react-icons";

const NavBar = () => (
	<NavigationMenu.Root className="w-full py-3 border-b-2">
		<NavigationMenu.List className="flex justify-start w-full">
			<NavigationMenu.Item className="mr-auto">
				<NavigationMenu.Link asChild>
					<Link to="/">LogiCola</Link>
				</NavigationMenu.Link>
			</NavigationMenu.Item>
			<NavigationMenu.Item className="mx-3">
				<NavigationMenu.Trigger>
					Chapters <CaretDownIcon className="inline-block" aria-hidden />
				</NavigationMenu.Trigger>
				<NavigationMenu.Content className=" absolute animate-fadeIn bg-white right-0">
					<ul className="flex">
						<li className="mx-3">
							<NavigationMenu.Link asChild>
								<Link to="/chapter/1">Chapter 1</Link>
							</NavigationMenu.Link>
						</li>
						<li className="mx-3">
							<NavigationMenu.Link asChild>
								<Link to="/chapter/2">Chapter 2</Link>
							</NavigationMenu.Link>
						</li>
						<li className="mx-3">
							<NavigationMenu.Link asChild>
								<Link to="/chapter/3">Chapter 3</Link>
							</NavigationMenu.Link>
						</li>
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
			<NavigationMenu.Item className="mx-3">
				<NavigationMenu.Link asChild>
					<Link to="/contact">Contact</Link>
				</NavigationMenu.Link>
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
);

export default NavBar;
