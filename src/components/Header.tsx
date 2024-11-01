"use client";

import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Header() {
	gsap.registerPlugin(SplitText);
	useEffect(() => {
		const navLink = document.querySelectorAll(".split");

		const split = new SplitText(navLink, {
			type: "lines, words, chars",
		});

		gsap.from(split.chars, {
			duration: 1,
			yPercent: 100,
			autoAlpha: 0,
			stagger: 0.1,
			ease: "power4.out",
		});
	});
	return (
		<header>
			<h1>Header</h1>
			<nav>
				<ul>
					<li>
						<Link href="/" className="split">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className="split">
							About
						</Link>
					</li>
					<li>
						<Link href="/contact" className="split">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
