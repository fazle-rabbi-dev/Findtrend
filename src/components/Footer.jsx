import { footerLinks } from "@lib/constants";
import Logo from "./shared/Logo";

const Footer = () => {
	return (
		<footer className="main-container py-[80px] md:py-[38px]  flex flex-col md:flex-row items-center gap-x-2 gap-y-20 ">
			<Logo variant="black" />

			<nav className="flex-1 flex flex-col gap-x-4 gap-y-6 md:flex-row md:items-center md:justify-end">
				{footerLinks?.map((link) => (
					<a
						key={link.name}
						href={link.href}
						className="text-link text-center md:text-start">
						{link.name}
					</a>
				))}
			</nav>
		</footer>
	);
};

export default Footer;
