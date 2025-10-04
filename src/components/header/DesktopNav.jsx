import { navLinks } from "@lib/constants";

const DesktopNav = () => {
	return (
		<nav className="hidden lg:block">
			<ul className="flex items-center lg:gap-x-6 xl:gap-x-10">
				{navLinks?.map((link) => (
					<li key={link.name}>
						<a
							href={link.href}
							className="text-link">
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default DesktopNav;
