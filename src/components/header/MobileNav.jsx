import clsx from "clsx";
import { mobileNavLinks } from "@lib/constants";

const MobileNav = () => {
	return (
		<nav className="">
			<ul className="flex flex-col justify-center items-center gap-y-6">
				{mobileNavLinks?.map((link) => (
					<li key={link.name}>
						<a
							href={link.href}
							className={clsx(link.name === "Register" ? "btn-register inline-block" : "text-link")}>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MobileNav;
