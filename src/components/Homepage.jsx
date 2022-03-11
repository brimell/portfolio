import { useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import $ from "jquery";

export default function Homepage() {
	const tl = gsap.timeline()
	const ease = Power3.easeOut()

	useEffect(async () => {

		tl.from($('#homepageTitle'), {
			opacity: 0,
			y: '50',
			ease: ease,
		})
		const links = $(".hero-inner-links")[0].children;
		for (let i = 0; i < links.length; i++ ) {
			tl.from(links[i], {
				opacity: 0,
				y: '50',
				duration: 1,
				ease: ease,
			}, "<0.2");
		}
	}, []);

	return (
		<>
			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-inner-banner">
							<div className="hero-inner-col left"></div>
							<div className="hero-inner-col right">
								<div className="hero-inner-title">
									<h1 id="homepageTitle">
										this and this and this...
									</h1>
								</div>
								<div className="hero-inner-links">
									<div className="hero-inner-link-item">
										<div className="hero-inner-link-item-padding"></div>
										<a href="#">
											{" "}
											<span>stuff</span>
										</a>
									</div>
									<div className="hero-inner-link-item">
										<div className="hero-inner-link-item-padding"></div>
										<a href="#">
											{" "}
											<span>stuff</span>
										</a>
									</div>
									<div className="hero-inner-link-item">
										<div className="hero-inner-link-item-padding"></div>
										<a href="#">
											{" "}
											<span>stuff</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hero-inner-footer">
						<div className="hero-inner-footer-text">
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Provident laborum modi iure
								suscipit mollitia molestiae, libero repellendus
								adipisci ratione animi.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="chat">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 30"
					id="chat"
				>
					<path d="M16 26c8.84 0 16-5.82 16-13S24.84 0 16 0 0 5.82 0 13a11.72 11.72 0 004.12 8.71L3.33 30l7.53-4.69A19.11 19.11 0 0016 26z"></path>
				</svg>
			</div>
		</>
	);
}
