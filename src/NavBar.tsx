import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { HTMLProps } from "react";

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
				<NavigationMenu.Content className="absolute animate-fadeIn bg-white left-0 w-full border-b-2">
					<ul className="grid grid-cols-2">
						<ChapterLink
							title="Basic Propositional Logic"
							subtitle="Chapter 6"
							to="/chapter/6"
						/>
						<ChapterLink
							title="Propositional Proofs"
							subtitle="Chapter 7"
							to="/chapter/7"
						/>
						<ChapterLink
							title="Quantificational Logic"
							subtitle="Chapter 8"
							to="/chapter/8"
						/>
						<ChapterLink
							title="Relations and Identity"
							subtitle="Chapter 9"
							to="/chapter/9"
						/>
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

type ChapterLinkProps = HTMLProps<HTMLLIElement> & {
	title: string;
	subtitle: string;
	to: string;
};

export const ChapterLink = ({
	title,
	subtitle,
	to,
	...props
}: ChapterLinkProps) => (
	<li className="mx-3" {...props}>
		<NavigationMenu.Link asChild>
			<Link to={to}>
				<div className="flex flex-col">
					<p className="text-lg">{title}</p>
					<p className="text-sm">{subtitle}</p>
				</div>
			</Link>
		</NavigationMenu.Link>
	</li>
);
export default NavBar;
