const mainNavigations = [
	{ name: "About", href: "#about" },
	{ name: "How it work", href: "#how-it-work" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Solution", href: "#solution" },
	{ name: "Features", href: "#features" },
];

export const navLinks = [...mainNavigations];

export const mobileNavLinks = [...mainNavigations, { name: "Login", href: "#login" }, { name: "Register", href: "#register" }];

export const badges = ["images/badge-twitter.png", "images/badge-pinterest.png", "images/badge-fb.png", "images/badge-dribbble.png"];

export const clientLogos = [
	// --- Row 1 ---
	{ name: "Microsoft", path: "images/companies/microsoft.png", alt: "Microsoft logo" },
	{ name: "Allianz", path: "images/companies/allianz.png", alt: "Allianz logo" },
	{ name: "Upwork", path: "images/companies/upwork.png", alt: "Upwork logo" },
	{ name: "Volvo", path: "images/companies/volvo.png", alt: "Volvo logo" },

	// --- Row 2 ---
	{ name: "Grab", path: "images/companies/grab.png", alt: "Grab logo" },
	{ name: "Verizon", path: "images/companies/verizon.png", alt: "Verizon logo" },
	{ name: "Coinbase", path: "images/companies/coinbase.png", alt: "Coinbase logo" },
	{ name: "Expedia", path: "images/companies/expedia.png", alt: "Expedia logo" },

	// --- Row 3 ---
	{ name: "Airtable", path: "images/companies/airtable.png", alt: "Airtable logo" },
	{ name: "Magento", path: "images/companies/magento.png", alt: "Magento logo" },
	{ name: "Carrera", path: "images/companies/carrera.png", alt: "Carrera logo" },
	{ name: "Bonanza", path: "images/companies/bonanza.png", alt: "Bonanza logo" },

	// --- Row 4 ---
	{ name: "WeTransfer", path: "images/companies/wetransfer.png", alt: "WeTransfer logo" },
	{ name: "Suzuki", path: "images/companies/suzuki.png", alt: "Suzuki logo" },
	{ name: "Algolia", path: "images/companies/algolia.png", alt: "Algolia logo" },
	{ name: "Heineken", path: "images/companies/heineken.png", alt: "Heineken logo" },
];

export const socialPlatformLogos = [
	{ name: "Facebook", src: "images/icons/facebook.png", isActive: false },
	{ name: "Twitter", src: "images/icons/twitter.png", isActive: true }, // Highlighted
	{ name: "Dribbble", src: "images/icons/dribbble.png", isActive: false },
	{ name: "Pinterest", src: "images/icons/pinterest.png", isActive: false },
	{ name: "Medium", src: "images/icons/medium.png", isActive: false },
	{ name: "Reddit", src: "images/icons/reddit.png", isActive: false },
	{ name: "VKontakte", src: "images/icons/vkontakte.png", isActive: false },
	{ name: "LinkedIn", src: "images/icons/linkedin.png", isActive: false },
];

export const pricingPlans = [
	{
		name: "Personal",
		tagline: "Special first packet for all",
		price: 8,
		isHighlighted: false,
		buttonText: "Start Free Trial",
		features: ["Up to 5 page each group", "Up to 10 group page", "5 Days group page saved"],
		href: "#personal",
	},
	{
		name: "Regular",
		tagline: "Recommended for personal pro",
		price: 20,
		isHighlighted: true, // Highlighted card
		buttonText: "Start Free Trial",
		features: ["Up to 15 page each group", "Download page up to 20 page", "Up to 10 group page", "15 Days group page saved"],
		href: "#regular",
	},
	{
		name: "Premium",
		tagline: "Packet for Startup & Company",
		price: 48,
		isHighlighted: false,
		buttonText: "Start Free Trial",
		features: [
			"Unlimited group pages",
			"Unlimited download page",
			"Unlimited page each group",
			"Customize sorting group pages",
			"Customize group page name",
			"30 Days group page saved",
		],
		href: "#premium",
	},
];

export const footerLinks = [
	{ name: "Privacy Policy", href: "#privacy-policy" },
	{ name: "Terms and Conditions", href: "#terms-and-conditions" },
	{ name: "Contact Us", href: "#contact-us" },
	{ name: "Careers", href: "#careers" },
];
