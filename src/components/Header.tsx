"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function Header() {
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

		const scroller = ScrollSmoother.create({
			smooth: 1.5,
			effects: true,
		});

		scroller.effects("h1", {
			speed: "clamp(0.5)",
		});

		scroller.effects("a", {
			speed: "clamp(0.8)",
		});
	});
	return (
		<header>
			<h1>Header</h1>
			<nav>
				<ul>
					<li>
						<Link href="/" className="split relative py-2 px-4">
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="split relative py-2 px-4"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="split relative py-2 px-4"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
