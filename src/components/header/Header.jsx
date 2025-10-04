import { useState, useEffect } from "react";

import Logo from "@components/shared/Logo";
import DesktopNav from "./DesktopNav";
import UserActions from "./UserActions";
import MobileNav from "./MobileNav";
import Hero from "@components/Hero";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const toggleMenu = () => {
		setIsOpenMenu((prev) => !prev);
	};

	useEffect(() => {
		if (isOpenMenu) {
			// Hide body scroll
			document.body.style.overflow = "hidden";
		} else {
			// Restore body scroll
			document.body.style.overflow = "";
		}
	}, [isOpenMenu]);

	return (
		<header className="bg-black bg-[url('images/ornament-sm.svg')] md:bg-[url('images/ornament-lg.svg')] bg-cover bg-center z-50">
			{/* ============= WRAPPER ============= */}
			<section className="relative z-50 min-h-[100px] py-[30px]  text-white ">
				{/* ============= MAIN CONTAINER ============= */}
				<div className="main-container flex justify-between items-center">
					<Logo />
					<DesktopNav />

					<div className="flex items-center gap-8">
						<UserActions />
						{/* ============= Mobile Menu Button ============= */}
						<button
							onClick={toggleMenu}
							className="lg:hidden">
							<img
								src={isOpenMenu ? "/images/icons/close.png" : "/images/icons/menu.png"}
								alt="Menu Button"
								className="size-6"
							/>
						</button>
					</div>
				</div>

				{/* ============= Mobile Navigation ============= */}
				{isOpenMenu && (
					<div className="fixed -z-10 inset-0 h-full bg-black/80 ">
						<div className="pt-[168px] pb-[50px] bg-black">
							<MobileNav />
						</div>
					</div>
				)}
			</section>

			<Hero />
		</header>
	);
};

export default Header;
