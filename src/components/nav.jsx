import { useState, useEffect, useRef } from "react";
import $ from "jquery";
import { gsap, Power3 } from "gsap";

export default function Nav() {
	const tl = gsap.timeline();
	const ease = Power3.easeOut();

	return (
		<div className="nav">
			<a href="#home">home</a>
			<a href="#projects">projects</a>
		</div>
	);
}
