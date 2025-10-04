const Features = () => {
	return (
		<section className="py-[140px] bg-primary ">
			<div className="main-container">
				<h2 className="heading-2-large text-center">Open new tabs is sh*t</h2>

				{/* ============= BADGE WITH ANNOTATION ============= */}
				<div className="my-[80px] lg:my-[60px] ">
					{/* ============= WHITE BOX ============= */}
					<div className="relative bg-white-soft p-6 rounded-[14px] lg:px-20 lg:py-14 lg:max-w-[502px] mx-auto ">
						{/* ============= FIRST/LEFT ANNOTATION ============= */}
						<div className="w-[93px] absolute left-0 bottom-[-55px] lg:left-[-118px] lg:top-[50px] lg:rotate-[10deg] ">
							<img
								src="images/icons/arrow-up-right.svg"
								alt=""
								className="w-7 h-[34px] mx-auto lg:hidden"
							/>
							<img
								src="images/icons/arrow-right.svg"
								alt=""
								className="w-7 h-[34px] hidden lg:block lg:ml-auto"
							/>
							<p className="annotation text-center">solution for discover a trend</p>
						</div>

						{/* ============= BADGE ============= */}
						<div className="">
							<img
								src="images/feature-badge.png"
								alt=""
								className="w-full h-20 sm:h-24 lg:h-20 "
							/>
						</div>

						{/* ============= SECOND/RIGHT ANNOTATION ============= */}
						<div className="w-[94px] absolute right-0 top-[-48px] lg:right-[-118px] lg:top-[50px] rotate-[10deg] ">
							<p className="annotation text-center">you just need one tab now</p>
							<img
								src="images/icons/arrow-down-left.svg"
								alt=""
								className="w-7 h-[34px] lg:hidden"
							/>
							<img
								src="images/icons/arrow-left.svg"
								alt=""
								className="w-7 h-[34px] hidden lg:block"
							/>
						</div>
					</div>
				</div>

				<p className="text-body text-center lg:max-w-[666px] mx-auto">
					A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one
					tab.
				</p>
			</div>
		</section>
	);
};

export default Features;
