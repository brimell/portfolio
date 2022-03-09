import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ContextProvider } from "./context/context";
import Cursor from "./components/cursor";

import Homepage from "./components/Homepage";
import Nav from "./components/nav";

function App() {
	const [loading, setLoading] = useState(true);
	const loaderRef = useRef();
	const cursorRef = useRef()

	useEffect(() => {
		setLoading(false);
		gsap.from(loaderRef.current, {
			opacity: 0,
			duration: 1,
			ease: "Power3.easeInOut",
		});
		const cursor = new Cursor(cursorRef.current);
	}, []);

	return (
		<ContextProvider>
			<div ref={loaderRef} className={`App ${loading ? "loading" : ""}`}>
				<Nav />
				<Homepage />
				<div ref={cursorRef} className="cursor"></div>
			</div>
		</ContextProvider>
	);
}

export default App;
