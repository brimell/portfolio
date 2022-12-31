import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from 'three';

import { ContextProvider } from "./components/context";
// import Cursor from "./components/cursor";

import Homepage from "./components/Homepage";
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

	return (
		<ContextProvider>
			<div ref={appRef} className={`App ${loading ? "loading" : ""}`}>
				<HamburgerNav />
				<Homepage />
				{/* <div ref={cursorRef} className="cursor"></div> */}
			</div>
		</ContextProvider>
	);
}

export default App;
