import { n as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { n as IconArrowLeft, r as require_react, t as IconArrowRight } from "../_libs/react+tabler__icons-react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Instagram, i as Menu, n as Play, o as ArrowDown, r as Phone, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbDxhwFc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var bg_default = "/assets/bg-Ux3vx3Pv.jpg";
var links = [
	{
		href: "#intro",
		label: "Introduction"
	},
	{
		href: "#team",
		label: "Team"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-ink/85 backdrop-blur-md shadow-lg" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bg_default,
						alt: "ASHFX STUDIO",
						className: "h-9 w-auto shrink-0 object-contain rounded-2xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-xl tracking-widest text-blush",
						children: "ASHFX STUDIO"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-blush",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105",
						children: "Hire us"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "shrink-0 rounded-md border border-border p-2 text-blush md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "animate-fade-in border-t border-border bg-ink/95 px-5 py-4 md:hidden",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground",
				children: l.label
			}, l.href))
		})]
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate flex min-h-screen items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bg_default,
				alt: "",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-background/80 to-background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl px-5 pt-32 pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-fade-in font-display text-sm tracking-[0.5em] text-primary sm:text-base",
						children: "CREATIVE VIDEO EDITING COLLECTIVE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-xl mt-4 animate-fade-in text-[clamp(3.5rem,17vw,15rem)] text-blush",
						children: "Portfolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Cinematic edits, reels, YouTube videos and commercial projects — crafted with precision, delivered on time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " See our work"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#intro",
							className: "inline-flex items-center gap-2 rounded-full border border-blush/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-blush transition-colors hover:bg-blush/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4" }), " Explore"]
						})]
					})
				]
			})
		]
	});
}
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setVisible(true);
					io.disconnect();
				}
			});
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		visible
	};
}
function Reveal({ children, className, delay = 0 }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
function IntroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "intro",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-xl text-center text-[clamp(2.75rem,9vw,7rem)] text-blush",
					children: "Introduction"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are a passionate team of creative video editors dedicated to transforming ideas into visually engaging stories. Our expertise includes cinematic edits, social media content, promotional videos, reels, YouTube videos, and commercial projects." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With a strong focus on creativity, precision, and timely delivery, we strive to produce high-quality videos that capture attention and leave a lasting impression. Every project is handled with professionalism, ensuring that our clients receive content that matches their vision and exceeds expectations." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "border-l-4 border-gold pl-5 text-lg font-semibold text-gold sm:text-2xl",
								children: "Our mission is simple: to create impactful videos that inspire, entertain, and help brands, creators, and businesses stand out in today's digital world."
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-4 sm:grid-cols-3",
					children: [
						{
							k: "50+",
							v: "Projects delivered"
						},
						{
							k: "4",
							v: "Specialists on the team"
						},
						{
							k: "24h",
							v: "Typical first cut"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card/60 p-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-blush",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm uppercase tracking-widest text-muted-foreground",
								children: s.v
							})]
						})
					}, s.k))
				})
			]
		})
	});
}
var AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
	const [active, setActive] = (0, import_react.useState)(0);
	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};
	const handlePrev = () => {
		setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};
	const isActive = (index) => {
		return index === active;
	};
	(0, import_react.useEffect)(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5e3);
			return () => clearInterval(interval);
		}
	}, [autoplay]);
	const randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid grid-cols-1 gap-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-80 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: testimonials.map((testimonial, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9,
						z: -100,
						rotate: randomRotateY()
					},
					animate: {
						opacity: isActive(index) ? 1 : .7,
						scale: isActive(index) ? 1 : .95,
						z: isActive(index) ? 0 : -100,
						rotate: isActive(index) ? 0 : randomRotateY(),
						zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
						y: isActive(index) ? [
							0,
							-80,
							0
						] : 0
					},
					exit: {
						opacity: 0,
						scale: .9,
						z: 100,
						rotate: randomRotateY()
					},
					transition: {
						duration: .4,
						ease: "easeInOut"
					},
					className: "absolute inset-0 origin-bottom",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: testimonial.src,
						alt: testimonial.name,
						width: 500,
						height: 500,
						draggable: false,
						className: "h-full w-full rounded-3xl object-cover object-center"
					})
				}, testimonial.src)) })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						y: 20,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					exit: {
						y: -20,
						opacity: 0
					},
					transition: {
						duration: .2,
						ease: "easeInOut"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl dark:text-white truncate font-bold uppercase text-primary tracking-[0.2em]",
							children: testimonials[active].name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm dark:text-neutral-500 text-[clamp(1.5rem,2vw,1rem)] text-blush",
							children: testimonials[active].designation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-8 text-lg text-blush dark:text-neutral-300",
							children: testimonials[active].quote.split(" ").map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: {
									filter: "blur(10px)",
									opacity: 0,
									y: 5
								},
								animate: {
									filter: "blur(0px)",
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .2,
									ease: "easeInOut",
									delay: .02 * index
								},
								className: "inline-block",
								children: [word, "\xA0"]
							}, index))
						})
					]
				}, active), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 pt-12 md:pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handlePrev,
						className: "group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary dark:bg-neutral-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconArrowLeft, { className: "h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleNext,
						className: "group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary dark:bg-neutral-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconArrowRight, { className: "h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" })
					})]
				})]
			})]
		})
	});
};
var pr_default = "/assets/pr-4_61j2dz.png";
var shrijan_default = "/assets/shrijan-bn-F01g2.png";
var minal_default = "/assets/minal-wtLqY8yt.png";
var rishabh_default = "/assets/rishabh-B1JSYLUk.png";
var sahil_default = "/assets/sahil-DWMxofBR.png";
function TeamSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "team",
		className: "relative bg-ink/50 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-xl text-[clamp(2.5rem,8vw,6rem)] text-blush",
					children: "Introducing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-primary sm:text-4xl",
					children: "our team"
				})]
			}) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedTestimonials, { testimonials: [
			{
				quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
				name: "Srijan Pandey",
				designation: "Lead Editor",
				src: shrijan_default
			},
			{
				quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
				name: "Sahil Gupta",
				designation: "Video Editor & Motion Graphic Design",
				src: sahil_default
			},
			{
				quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
				name: "Meenal Choudhary",
				designation: "Model - Representative",
				src: minal_default
			},
			{
				quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
				name: "Rishabh Sharma",
				designation: "Cinematographer",
				src: rishabh_default
			},
			{
				quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
				name: "Pravin Gurjar",
				designation: "Graphic Designer",
				src: pr_default
			}
		] })]
	});
}
var skills = [
	{
		label: "Attention to Detail",
		value: 96
	},
	{
		label: "Creative Motion Design",
		value: 92
	},
	{
		label: "Visual Storytelling",
		value: 94
	}
];
var tools = [
	"Premiere Pro",
	"After Effects",
	"Photoshop",
	"DaVinci Resolve"
];
function SkillsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 lg:order-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display-xl text-[clamp(1.6rem,4vw,2.6rem)] text-blush",
					children: "\"A sharp eye for the smallest details combined with the ability to bring designs to life through creative motion and weave compelling stories through visual storytelling.\""
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-6",
					children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold uppercase tracking-[0.18em] text-blush",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg text-primary",
								children: [s.value, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 overflow-hidden rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-primary to-blush transition-[width] duration-1000 ease-out",
								style: { width: `${s.value}%` }
							})
						})] })
					}, s.label))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 lg:order-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display-xl bg-primary px-5 py-2 text-[clamp(2.5rem,7vw,5.5rem)] text-blush",
						children: "Personal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display-xl bg-primary px-5 py-2 text-[clamp(2.5rem,7vw,5.5rem)] text-blush",
						children: "Skills"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-3 lg:justify-end",
					children: tools.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-xl border border-primary/50 bg-card px-5 py-3 text-sm font-semibold uppercase tracking-widest text-blush transition-colors hover:bg-primary",
							children: t
						})
					}, t))
				})]
			})]
		})
	});
}
var projects = [{
	img: "/assets/work-cafe-DUM0ZD3m.jpg",
	title: "Global Tea Cafe",
	tag: "Brand promo · On-location shoot",
	copy: "Full-day shoot and social-first edit for a busy cafe launch — storefront b-roll, product macros and vertical reels."
}, {
	img: "/assets/work-edit-h1sN2NwJ.jpg",
	title: "Podcast Reels",
	tag: "Raw → Edit · Timeline craft",
	copy: "Multicam podcast episodes cut into punchy vertical clips with captions, sound design and colour grading."
}];
function WorkSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative bg-ink/50 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-xl text-center text-[clamp(2.5rem,8vw,6rem)] text-blush",
				children: "Work Experience"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 flex flex-wrap justify-center gap-8",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-3xl border border-border bg-card w-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								loading: "lazy",
								width: 300,
								height: 256,
								className: "h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[16rem]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
									children: p.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl tracking-wide text-blush",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: p.copy
								})
							]
						})]
					})
				}, p.title))
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] text-blush",
					children: [
						"Let's",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"collaborate"
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base text-muted-foreground",
						children: "Got footage, an idea, or a launch date? Send it over and we'll come back with a plan and a first cut."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com/_ashfx_18",
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-center gap-4 text-lg text-blush",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blush/50 transition-colors group-hover:bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "underline decoration-blush/40 underline-offset-4",
								children: "_ashfx_18"
							})]
						})
					}), ["+91 63063 58614", "+91 81603 94569"].map((tel, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 220 + i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${tel.replace(/\s/g, "")}`,
							className: "group flex items-center gap-4 text-lg text-blush",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink transition-colors group-hover:bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
							}), tel]
						})
					}, tel))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 360,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com/_ashfx_18",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105",
						children: "Start a project"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "justify-self-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[9/17] w-[16rem] rounded-[2.5rem] border-4 border-blush/70 bg-ink p-3 shadow-2xl sm:w-[19rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-3 h-1.5 w-16 rounded-full bg-blush/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-[calc(100%-1.5rem)] place-items-center rounded-[1.75rem] bg-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-36 w-36 place-items-center rounded-full border-2 border-primary bg-gradient-to-br from-primary/40 to-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl text-blush",
								children: "ASH"
							})
						})
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mx-auto mt-20 max-w-7xl border-t border-border px-5 pt-8 text-center text-sm text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" AshFX Studio · Creative video editing"
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		]
	});
}
//#endregion
export { Index as component };
