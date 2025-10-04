import clsx from "clsx";

import BreathingText from "@components/fancy/text/breathing-text";
import { badges } from "@lib/constants";

const Hero = () => {
	return (
		<section className="relative z-10 text-white pt-14 pb-20 md:pt-[100px] md:pb-[90px] lg:pb-[160px] overflow-x-hidden">
			<div className="main-container">
				{/* ============= First Row ============= */}
				<div className="max-w-[700px] mx-auto text-center ">
					<h1 className="heading-1">
						Minimize your tabs. <br /> Find the
						<BreathingText
							staggerDuration={0.08}
							fromFontVariationSettings="'wght' 100, 'slnt' 0"
							toFontVariationSettings="'wght' 800, 'slnt' -10">
							&nbsp;trends!
						</BreathingText>
					</h1>
					<p className="text-body text-gray mt-8 xl:mt-10 max-w-[500px] mx-auto lg:max-w-none ">
						Don’t let your computer memories consumes all of those browser tabs. Findtrend let you gathers all of your favorite website into one
						place.
					</p>
					<div className="mt-8 md:mt-10 relative">
						<a
							href="#"
							className="btn-base bg-primary hover:bg-primary-dark ">
							Get Started 🔥
						</a>
						{/* Annotation */}
						<div className="hidden md:block absolute right-[142px] -bottom-4 rotate-6 ">
							<p className="annotation w-[93px]">All research start from here</p>
							<img
								src="images/icons/arrow-left-white.png"
								alt=""
								className=""
							/>
						</div>
					</div>
				</div>

				{/* ============= Second Row ============= */}
				<ul className="mt-[80px] lg:mt-[100px] -space-y-[24px] lg:flex justify-center items-center">
					{badges?.map((badge, index) => (
						<li
							key={badge}
							className={clsx(
								"relative mx-auto w-[293px] h-[88px] lg:mx-0 lg:animate-pulse animation-duration-[1000]",
								// Adjust vertical position: push 2nd and 4th items downward on large screens
								[1, 3].includes(index) ? "lg:mb-[-120px]" : "",
								// Shift all badges slightly left except the first one
								index !== 0 && "lg:-ml-26",
								// Slightly lift the third badge on mobile, reset on large screens
								index === 2 && "-mt-8 lg:mt-0"
							)}
							style={{ zIndex: 50 - index }}>
							<img
								src={badge}
								alt=""
								className="w-full h-full"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Hero;
