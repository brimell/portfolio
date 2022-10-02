import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery";

import { ContextProvider } from "./context/context";
// import Cursor from "./components/cursor";

import Homepage from "./components/Homepage";
import Nav from "./components/nav";
import HamburgerNav from "./components/HamburgerNav";

function App() {
	const [loading, setLoading] = useState(true);
	const appRef = useRef();
	// const cursorRef = useRef()

	useEffect(() => {
		setLoading(false);
		gsap.from(appRef.current, {
			opacity: 0,
			duration: 1.5,
			ease: "Power3.easeInOut",
		});
		// const cursor = new Cursor(cursorRef.current);
	}, []);
	console.log($(window).height())
	return (
		<ContextProvider>
			<div ref={appRef} className={`App ${loading ? "loading" : ""}`}>
				

				{$(window).height() > 1000 ? <Nav /> : <HamburgerNav />}
				<Homepage />
				{/* <div ref={cursorRef} className="cursor"></div> */}
			</div>
		</ContextProvider>
	);
}

export default App;
