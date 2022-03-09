import { useEffect, useState } from "react";

export default function Homepage() {
	return (
		<>
			<header>
				<div className="header-inner">
					<div className="header-inner-col left">
						<div className="header-inner-logo">
							<h2>Laura Rimell</h2>
						</div>
					</div>
					<div className="header-inner-col right">
						<div className="header-inner-nav">
							<span className="header-inner-nav-link">link</span>
							<div className="header-inner-nav-menu">
								<span className="header-inner-nav-link">
									menu
								</span>
								<div className="header-inner-nav-menu-hamburger">
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-inner-banner">
							<div className="hero-inner-col left"></div>
							<div className="hero-inner-col right">
								<div className="hero-inner-title">
									<h1>We make it happen</h1>
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
								Leading digital agency with solid design and
								development expertise. We build readymade
								websites, mobile applications, and elaborate
								online business services.
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
			<div className="cursor"></div>
		</>
	);
}
