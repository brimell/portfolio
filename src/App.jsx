import { useState, useEffect, useRef } from "react";
import Cursor from "./components/cursor";
import { gsap } from "gsap";
import Homepage from "./components/Homepage";
import { ContextProvider } from "./context/context";

function App() {
	const [loading, setLoading] = useState(true);
	const loaderRef = useRef();

	useEffect(() => {
		setLoading(false);
		gsap.from(loaderRef.current, {
			opacity: 0,
			duration: 1,
			ease: "Power3.easeInOut",
		});
		const cursor = new Cursor(document.querySelector(".cursor"));
	}, []);

	return (
		<ContextProvider>
			<div ref={loaderRef} className={`App ${loading ? "loading" : ""}`}>
				<Homepage />
			</div>
		</ContextProvider>
	);
}

export default App;
