import { Link, Outlet } from "react-router-dom";

const ChapterLayout = () => {
	return (
		<>
			<aside className="float-left bg-gray-200 h-screen">
				<ul>
					<AsideLink
						caption="Chapter 6"
						title="Basic Propositional Logic"
						to="/chapter/6"
					/>
					<AsideLink
						caption="Chapter 7"
						title="Propositional Proofs"
						to="/chapter/7"
					/>
					<AsideLink
						caption="Chapter 8"
						title="Quantificational Logic"
						to="/chapter/8"
					/>
					<AsideLink
						caption="Chapter 9"
						title="Relations and Identity"
						to="/chapter/9"
					/>
				</ul>
			</aside>
			<Outlet />
		</>
	);
};

type AsideLinkProps = {
	caption: string;
	title: string;
	to: string;
};

const AsideLink = ({ caption, title, to }: AsideLinkProps) => (
	<li>
		<Link to={to}>
			<p>{caption}</p>
			<h3>{title}</h3>
		</Link>
	</li>
);

export default ChapterLayout;
