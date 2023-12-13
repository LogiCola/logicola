import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const toggleMenu = () => {
		setDropdownVisible(!isDropdownVisible);
	};

	return (
		<nav className="bg-white border-slate-200 dark:border-slate-600 dark:bg-slate-900">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
				<Link
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<Logo />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						LogiCola
					</span>
				</Link>

				<button
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div className="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
					<ul className="flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
						<li>
							<Link
								to="/"
								className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-slate-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-slate-700"
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li>
							<button
								type="button"
								onMouseEnter={toggleMenu}
								id="mega-menu-full-dropdown-button"
								data-collapse-toggle="mega-menu-full-dropdown"
								className="flex items-center justify-between w-full py-2 px-3 text-slate-900 rounded md:w-auto hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-slate-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-slate-700"
							>
								Chapters
								<svg
									className="w-2.5 h-2.5 ms-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 4 4 4-4"
									/>
								</svg>
							</button>
						</li>

						<li>
							<Link
								to="/contact"
								className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-slate-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-slate-700"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div
				id="mega-menu-full-dropdown"
				onMouseLeave={toggleMenu}
				className={`${
					!isDropdownVisible && "hidden"
				} border-slate-200 shadow-sm bg-slate-50 md:bg-white absolute w-full z-50`}
			>
				<div className="grid max-w-screen-xl px-4 py-5 mx-auto text-slate-900 sm:grid-cols-2 md:px-6 shadow-sm">
					<ul>
						<li>
							<Link
								to="/chapters/6"
								className="block p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
							>
								<div className="font-semibold">Basic Propositional Logic</div>
								<span className="text-sm text-slate-500 dark:text-slate-400">
									Chapter 6
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="/chapters/8"
								className="block p-3 rounded-lg hover:bg-slate-100 opacity-30 cursor-not-allowed"
							>
								<div className="font-semibold">Quantificational Logic</div>
								<span className="text-sm text-slate-500 dark:text-slate-400">
									Chapter 8
								</span>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link
								to="/chapters/7"
								className="block p-3 rounded-lg hover:bg-slate-100"
							>
								<div className="font-semibold">Propositional Proofs</div>
								<span className="text-sm text-slate-500">Chapter 7</span>
							</Link>
						</li>
						<li>
							<Link
								to="/chapters/9"
								className="block p-3 rounded-lg hover:bg-slate-100 opacity-30 cursor-not-allowed"
							>
								<div className="font-semibold">Relations and Identity</div>
								<span className="text-sm text-slate-500">Chapter 9</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
