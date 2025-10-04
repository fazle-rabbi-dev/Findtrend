import clsx from "clsx";
import { socialPlatformLogos } from "@lib/constants";

const SocialPlatforms = () => {
	return (
		<section className="main-container mt-[50px] 2xl:mt-[140px] py-[60px] lg:py-[140px]">
			<h2 className="heading-2 text-center">All platform connect to Findtrend</h2>

			{/* ============= SOCIAL PLATFORM LOGOS ============= */}
			<div className="mt-8 lg:mt-20 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-6">
				{socialPlatformLogos?.map((logo) => (
					<div
						key={logo.name}
						className={clsx("p-4 lg:p-8", logo.isActive && "bg-primary")}>
						<img
							src={logo.src}
							alt={logo.name}
							className="w-[30px] lg:w-[60px] "
						/>
					</div>
				))}
			</div>

			{/* ============= TWEETS ============= */}
			<div className="mt-8 lg:mt-[77px] ">
				<img
					src="images/tweet-1.png"
					alt="Tweet 1"
					className="w-full max-w-[800px] mx-auto "
				/>
				<img
					src="images/tweet-2.png"
					alt="Tweet 1"
					className="w-full max-w-[800px] mx-auto"
				/>
				<img
					src="images/tweet-3.png"
					alt="Tweet 1"
					className="w-full max-w-[800px] mx-auto"
				/>

				<div className="mt-8 lg:mt-20 flex items-center justify-center">
					<a
						href="#"
						className="btn-base bg-black text-white">
						View More Trend
					</a>
				</div>
			</div>
		</section>
	);
};

export default SocialPlatforms;
