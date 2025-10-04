import { useState } from "react";
import clsx from "clsx";

import { pricingPlans } from "@lib/constants";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
	const [isMonthlyBilling, setIsMonthlyBilling] = useState(true);

	const toggleBillingCycle = () => {
		setIsMonthlyBilling((prev) => !prev);
	};

	return (
		<section className="py-10 md:py-20 bg-black text-white">
			<div className="main-container ">
				<h2 className="heading-2 text-center">Get your best deal</h2>

				<div className="py-14 flex justify-center ">
					<div className="relative flex justify-center items-center gap-x-6">
						<p className={clsx("billing-cycle", !isMonthlyBilling && "opacity-50")}>Monthly</p>
						<label className="switch">
							<input
								onChange={toggleBillingCycle}
								type="checkbox"
							/>
							<span className="slider"></span>
						</label>
						<p className={clsx("billing-cycle", isMonthlyBilling && "opacity-50")}>Yearly</p>

						{/* ============= Annotation ============= */}
						<div className="w-16 absolute right-[10px] top-[40px] md:-right-[90px] md:top-[-32px] ">
							<img
								src="images/icons/arrow-up-left.svg "
								alt=""
								className="md:hidden"
							/>
							<p className="annotation rotate-6">Save 10% per month</p>
							<img
								src="images/icons/arrow-left-light.svg"
								alt=""
								className="hidden md:block -ms-3"
							/>
						</div>
					</div>
				</div>

				{/* ============= PRICING CARDS ============= */}
				<div className="mt-20 sm:max-w-screen-sm mx-auto lg:max-w-none lg:mx-0 grid grid-cols-1 lg:grid-cols-3 items gap-x-4 2xl:gap-x-10 gap-y-6 ">
					{pricingPlans?.map((plan) => (
						<PricingCard
							key={plan.name}
							{...plan}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingPlans;
