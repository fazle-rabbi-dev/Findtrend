import clsx from "clsx";

const PricingCard = ({ name, tagline, price, isHighlighted, buttonText, features, href }) => {
	return (
		<article className={clsx("pricing-card", isHighlighted && "bg-primary")}>
			<div className="">
				<h3 className="card-title">{name}</h3>
				<p className="card-text mt-[14px] pb-6 border-b-[1.5px] border-black/30">{tagline}</p>
			</div>

			<div className="mt-8">
				<p className="">
					<span className="card-price">{price}</span>
					<span className="card-text"> /Month</span>
				</p>

				<ul className="mt-6 space-y-6 ">
					{features?.map((feature) => (
						<li
							key={feature}
							className="card-text flex items-center gap-2">
							<img
								src="images/icons/check.png"
								alt="Check mark"
								className="w-3 h-2"
							/>
							<p className="">{feature}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-[43px] flex-1 flex flex-col justify-end">
				<a
					href={href}
					className={clsx("btn-base block text-center", isHighlighted ? "bg-black text-white" : "bg-primary")}>
					{buttonText}
				</a>
			</div>
		</article>
	);
};

export default PricingCard;
