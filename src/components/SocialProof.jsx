import { clientLogos } from "@lib/constants";

const SocialProof = () => {
	return (
		<section className="main-container mt-[50px] 2xl:mt-[140px] ">
			<h2 className="heading-2 text-center">Findtrend make +1000 Startup grow</h2>

			<div className="mt-[32px] lg:mt-[90px] grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 lg:gap-x-8">
				{clientLogos?.map((logo) => (
					<div
						key={logo.name}
						className="flex items-center justify-center bg-white-soft px-[25px] py-[20px] lg:px-[30px] lg:py-[25px] rounded-lg ">
						<img
							src={logo.path}
							alt={logo.alt}
							className="max-h-8 w-auto"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default SocialProof;
