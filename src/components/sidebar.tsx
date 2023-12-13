import { Link } from "react-router-dom";

export function Sidebar() {
	return (
		<aside className="">
			<button
				data-drawer-target="default-sidebar"
				data-drawer-toggle="default-sidebar"
				aria-controls="default-sidebar"
				type="button"
				className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-slate-500 rounded-lg sm:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					/>
				</svg>
			</button>

			<aside
				id="default-sidebar"
				className="flex shrink-0 top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full w-full px-4 py-4 overflow-y-auto bg-slate-50 dark:bg-slate-800">
					<ul className="space-y-2 font-medium">
						<li>
							<Link
								to="/chapters"
								className="flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group"
							>
								<svg
									className="w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 21"
								>
									<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
									<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
								</svg>
								<span className="ms-3">Introduction to Logic</span>
							</Link>
						</li>
						<li>
							<Link
								to="/chapters/6"
								className="flex flex-col p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group"
							>
								<div className="text-xs">CHAPTER 6</div>
								<span className="flex-1 whitespace-nowrap">
									Basic Propositional Logic
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="/chapters/7"
								className="flex flex-col p-2 text-slate-700 rounded-lg dark:text-white hover:bg-slate-100 opacity-30 cursor-not-allowed"
							>
								<div className="text-xs">CHAPTER 7</div>
								<span className="flex-1 whitespace-nowrap">
									Propositional Proofs
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="/chapters/8"
								className="flex flex-col p-2 text-slate-700 rounded-lg dark:text-white hover:bg-slate-100 opacity-30 cursor-not-allowed"
							>
								<div className="text-xs">CHAPTER 8</div>
								<span className="flex-1 whitespace-nowrap">
									Quantificational Logic
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="/chapters/9"
								className="flex flex-col p-2 text-slate-700 rounded-lg dark:text-white hover:bg-slate-100 opacity-30 cursor-not-allowed"
							>
								<div className="text-xs">CHAPTER 9</div>
								<span className="flex-1 whitespace-nowrap">
									Relations and Identity
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</aside>
	);
}
