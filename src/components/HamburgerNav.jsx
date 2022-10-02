import { useState, useEffect, useRef } from "react";
import $ from "jquery";
import { gsap, Power3 } from "gsap";

export default function Nav() {
	const tl = gsap.timeline()
	const ease = Power3.easeOut()
	const [menuOpen, setMenuOpen] = useState(false);

	function menuClick() {
		if (menuOpen) {
			// close menu
			$("svg#hamburger-menu")[0].classList.toggle("active");
			setMenuOpen(false);
			// animate links to slide out
			const links = $(".slide-out-menu")[0].children;
			for (let i = 0; i < links.length; i++) {
				tl.to(
					links[i],
					{
						opacity: 0,
						x: "50",
						duration: 1,
						ease: ease,
					},
					"<0.2"
				);
			}

		} else {
			// open menu + change icon to x
			$("svg#hamburger-menu")[0].classList.toggle("active");
			setMenuOpen(true);
			// animate links to slide in
			const links = $(".slide-out-menu")[0].children;
			for (let i = 0; i < links.length; i++) {
				tl.fromTo(
					links[i],
					{
						opacity: 0,
						x: '50'
					},
					{
						opacity: 1,
						x: "0",
						duration: 1,
						ease: ease,
					},
					"<0.2"
				);
			}
		}
	}

	return (
		<header>
			<div className="header-inner">
				<div className="header-inner-col left">
					<div className="header-inner-logo">
						{/* <h2 id="navTitle">Portfolio</h2> */}
					</div>
				</div>
				<div className="header-inner-col right">
					<svg
						id="hamburger-menu"
						className="ham hamRotate180 ham5"
						viewBox="0 0 100 100"
						width="80"
						onClick={menuClick}
					>
						<path
							className="line top"
							d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
						/>
						<path className="line middle" d="m 70,50 h -40" />
						<path
							className="line bottom"
							d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
						/>
					</svg>
				</div>
			</div>
			<div className="slide-out-menu">
				<a href="">about me</a>
				<a href="">projects</a>
				<a href="">contact me</a>
				</div>
		</header>
	);
}
