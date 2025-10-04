import { useEffect } from "react";

import Header from "@components/header/Header";
import Features from "@components/Features";
import Benifits from "@components/Benifits";
import SocialProof from "@components/SocialProof";
import SocialPlatforms from "@components/SocialPlatforms";
import PricingPlans from "@components/PricingPlans";
import JoinUs from "@components/JoinUs";
import Footer from "@components/Footer";

const App = () => {
	useEffect(() => {
		console.clear();

		console.log("%c⚡ Welcome to Findtrend ⚡", "color: #ffffff; background: #000000; font-size:16px; padding:8px 12px; border-radius:8px;");

		console.log("%c👨‍💻 Built by Fazle Rabbi | MERN Stack Developer", "color:#00bcd4; font-size:14px;");

		console.log("%c💡 Tip: Stay curious, keep building!", "color:#4caf50; font-size:13px; font-style:italic;");
	}, []);

	return (
		<>
			<Header />
			<main>
				<Features />
				<Benifits />
				<SocialProof />
				<SocialPlatforms />
				<PricingPlans />
				<JoinUs />
			</main>
			<Footer />
		</>
	);
};

export default App;
