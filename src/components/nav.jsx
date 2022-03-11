// import { useState, useEffect, useRef } from "react";


export default function Nav() {
	return (
		<header>
			<div className="header-inner">
				<div className="header-inner-col left">
					<div className="header-inner-logo">
						<h2 id="navTitle">title</h2>
					</div>
				</div>
				<div className="header-inner-col right">
					<div className="header-inner-nav">
						{/* <span className="header-inner-nav-link">link</span> */}
						<div className="header-inner-nav-menu">
							{/* <span className="header-inner-nav-link">menu</span> */}
							<div className="header-inner-nav-menu-hamburger">
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
