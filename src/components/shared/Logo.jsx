import clsx from "clsx";

const Logo = ({ variant = "bright" }) => {
	return (
		<a
			href="#"
			className="flex items-center gap-3">
			<img
				src={clsx(variant === "bright" ? "/images/icons/logo-bright.png" : "/images/icons/logo-dark.png")}
				alt="Findtrend Logo"
				className="size-10"
			/>
			<p className={clsx("text-2xl font-inter font-bold leading-full", variant === "bright" && "text-white")}>Findtrend</p>
		</a>
	);
};

export default Logo;
