import React from "react";
import { Link } from "react-router-dom";

type Section = {
	name: string;
};

type TableOfContentProps = {
	title: string;
	sections: readonly Section[];
};

const TableOfContent: React.FC<TableOfContentProps> = ({ title, sections }) => {
	return (
		<div className="max-w-7xl bg-white border border-slate-200 rounded-lg mb-6 p-4 w-full">
			<h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900">
				{title}
			</h3>
			<hr className="h-px my-4 bg-slate-200 border-0" />
			<div className="mx-auto w-full max-w-screen-xl p-4">
				<div className="md:flex md:justify-between">
					<div className="grid grid-cols-2 sm:gap-72 sm:grid-cols-2">
						<div>
							<ul className="text-slate-500 font-medium">
								{sections.map((section, index) => (
									<li key={section.name} className="mb-4">
										<Link
											to={`exercises/${index}`}
											/* className={`${
												section.isEnabled
													? "hover:text-green-600 hover:underline"
													: "opacity-30 cursor-not-allowed"
											}`} */
										>
											{section.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableOfContent;
