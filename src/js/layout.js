import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import IndividualCard from "./views/IndividualCard.jsx";
import IndividualCardPlanets from "./views/IndividualCardPlanets.jsx";
import IndividualCardVehicles from "./views/IndividualCardVehicles.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/individualcard/:id" element={<IndividualCard />} />
						<Route path="/individualcardplanets/:id" element={<IndividualCardPlanets />} />
						<Route path="/individualcardvehicles/:id" element={<IndividualCardVehicles />} />
						{/* <Route path="/cardplanets" element={<CardPlanets />} />
						<Route path="/cardvehicles" element={<CardVehicles />} /> */}
						{/* <Route path="/single/:theid" element={<Single />} /> */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
